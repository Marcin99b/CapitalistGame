import { AppBar, BottomNavigation, BottomNavigationAction, Container, Paper, Typography } from "@mui/material";
import { FC } from "react";
import Home from "./Pages/Home/Home";
import { Apartment, AttachMoney, InsertChart } from "@mui/icons-material";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import Companies from "./Pages/Companies/Companies";
import Statistics from "./Pages/Statistics/Statistics";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const Layout: FC = () => {
  return (
    <>
      <AppBar position="static" style={{ padding: "10px", borderRadius: 5 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Capitalist Game
        </Typography>
      </AppBar>
      <Container maxWidth="sm" style={{ paddingTop: "15px" }}>
        <Outlet />
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Companies" icon={<Apartment />} href="/companies" />
            <BottomNavigationAction label="Earn" icon={<AttachMoney />} href="/" />
            <BottomNavigationAction label="Statistics" icon={<InsertChart />} href="/statistics" />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
};
