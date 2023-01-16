import { Box, Button, Card, CardContent, Paper, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getIntLocalStorage, setIntInLocalStorage } from "../../Components/LocalStorageFacade/LocalStorageFacade";

const Home: FC = () => {
  const [budget, setBudget] = useState(getIntLocalStorage("BUDGET"));
  const [addPerClick, setAddPerClick] = useState(getIntLocalStorage("ADD_PER_CLICK"));
  const [nextUpgradeCost, setNextUpgradeCost] = useState(getIntLocalStorage("NEXT_UPGRADE_COST"));

  useEffect(() => setIntInLocalStorage("BUDGET", budget), [budget]);

  useEffect(() => {
    setIntInLocalStorage("ADD_PER_CLICK", addPerClick);
  }, [addPerClick]);

  useEffect(() => {
    setIntInLocalStorage("NEXT_UPGRADE_COST", nextUpgradeCost);
  }, [nextUpgradeCost]);

  const addToBudget = (value: number) => setBudget(budget + value);
  const minusFromBudget = (value: number) => setBudget(budget - value);

  const handleAdd = () => addToBudget(addPerClick);

  const handleUpgrade = () => {
    minusFromBudget(nextUpgradeCost);
    setAddPerClick(Math.floor(addPerClick * 2));
    setNextUpgradeCost(Math.floor(nextUpgradeCost * 3));
  };

  return (
    <Stack spacing={3}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Budget
          </Typography>
          <Typography variant="h5" component="div">
            ${budget}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ${addPerClick} per click
          </Typography>
        </CardContent>
      </Card>
      <Paper>
        <Button style={{ padding: 0, margin: 0, width: "100%", height: "100%" }} onClick={handleAdd}>
          <Box paddingTop={10} paddingBottom={10}>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <Typography color="black">Click to earn money</Typography>
            </Stack>
          </Box>
        </Button>
      </Paper>
      <Button variant="contained" disabled={budget < nextUpgradeCost} onClick={handleUpgrade}>
        Upgrade for ${nextUpgradeCost}
      </Button>
    </Stack>
  );
};

export default Home;
