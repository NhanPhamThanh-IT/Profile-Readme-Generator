import { createContext, useMemo, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

const getInitialMode = () => {
    if (typeof window !== "undefined") {
        const savedMode = localStorage.getItem("colorMode");
        return savedMode === "dark" ? "dark" : "light";
    }
    return "light";
};

export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState(getInitialMode);

    const toggleColorMode = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("colorMode", newMode);
    };

    const theme = useMemo(() => {
        const isLight = mode === "light";
        return createTheme({
            palette: {
                mode,
                primary: {
                    main: isLight ? "#1976d2" : "#90caf9",
                },
                background: {
                    default: isLight ? "#f5f5f5" : "#121212",
                    paper: isLight ? "#ffffff" : "#1e1e1e",
                },
            },
        });
    }, [mode]);

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
};
