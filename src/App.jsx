import { CssBaseline, Box } from "@mui/material";
import { ColorModeProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components";
import AppRoutes from "./routes";

function App() {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Box p={2}>
          <AppRoutes />
        </Box>
      </BrowserRouter>
    </ColorModeProvider>
  );
}

export default App;
