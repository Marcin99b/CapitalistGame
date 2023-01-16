import { DoubleArrow, DriveEta } from "@mui/icons-material";
import { Avatar, Button, List, ListItemAvatar, ListItemButton, ListItemText, Stack } from "@mui/material";
import { FC } from "react";

const Companies: FC = () => {
  return (
    <Stack spacing={3}>
      <Button variant="contained">Create new</Button>
      <List dense={false}>
        <ListItemButton onClick={() => {}}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#3fd970" }}>
              <DriveEta />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="JanuszTrans" secondary={"Delivery company"} />
          <ListItemAvatar>
            <DoubleArrow />
          </ListItemAvatar>
        </ListItemButton>
      </List>
    </Stack>
  );
};

export default Companies;
