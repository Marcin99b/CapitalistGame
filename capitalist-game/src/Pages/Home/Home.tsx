import { Box, Button, Card, CardContent, Paper, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  getAddPerClickFromLocalStorage,
  getBudgetFromLocalStorage,
  getnextUpgradeCostFromLocalStorage,
  setAddPerClickInLocalStorage,
  setBudgetInLocalStorage,
  setnextUpgradeCostInLocalStorage,
} from "../../Components/LocalStorageFacade/LocalStorageFacade";

const Home: FC = () => {
  const [budget, setBudget] = useState(getBudgetFromLocalStorage());
  const [addPerClick, setAddPerClick] = useState(getAddPerClickFromLocalStorage());
  const [nextUpgradeCost, setNextUpgradeCost] = useState(getnextUpgradeCostFromLocalStorage());

  useEffect(() => setBudgetInLocalStorage(budget), [budget]);

  useEffect(() => {
    setAddPerClickInLocalStorage(addPerClick);
  }, [addPerClick]);

  useEffect(() => {
    setnextUpgradeCostInLocalStorage(nextUpgradeCost);
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
    <Stack spacing={3} padding={2}>
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
