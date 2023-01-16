import { Button } from "@mui/material";
import { FC } from "react";
import { resetLocalStorage } from "../../Components/LocalStorageFacade/LocalStorageFacade";

const Statistics: FC = () => {
  return (
    <Button variant="contained" color="error" onClick={resetLocalStorage}>
      Reset
    </Button>
  );
};

export default Statistics;
