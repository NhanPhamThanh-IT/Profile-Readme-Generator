import { AppBar, Toolbar, Typography } from "@mui/material";
import DarkModeToggle from "../DarkModeToggle";

const MyAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
