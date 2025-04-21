import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components";
import AppRoutes from "./routes";
import theme from "./theme";

function App() {
  return (
    <ColorModeProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeProvider>
  );
}

export default App;
