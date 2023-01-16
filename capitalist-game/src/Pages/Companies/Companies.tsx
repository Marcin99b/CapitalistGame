import { DomainAdd, DoubleArrow, DriveEta, FitnessCenter } from "@mui/icons-material";
import { Avatar, Box, Button, List, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material";
import { FC } from "react";

interface CompanySummary {
  name: string;
  category: string;
}

const delivery = (
  <Avatar sx={{ bgcolor: "#3fd970" }}>
    <DriveEta />
  </Avatar>
);

const construction = (
  <Avatar sx={{ bgcolor: "#d96b3f" }}>
    <DomainAdd />
  </Avatar>
);

const gym = (
  <Avatar sx={{ bgcolor: "#3f5ed9" }}>
    <FitnessCenter />
  </Avatar>
);

const companiesList: CompanySummary[] = [
  { name: "JanuszTrans", category: "delivery" },
  { name: "Betoniarze", category: "construction" },
  { name: "Siłownia", category: "gym" },
];

const Companies: FC = () => {
  return (
    <Stack spacing={3}>
      <Button variant="contained">Create new</Button>
      <List dense={false}>
        {companiesList.map((x) => (
          <ListItemButton key={x.name} onClick={() => {}}>
            <Box marginRight={2}>
              {x.category === "delivery" ? delivery : x.category === "construction" ? construction : gym}
            </Box>

            <ListItemText primary={x.name} secondary={x.category.toUpperCase()} />
            <ListItemAvatar>
              <DoubleArrow />
            </ListItemAvatar>
          </ListItemButton>
        ))}
      </List>
    </Stack>
  );
};

export default Companies;
