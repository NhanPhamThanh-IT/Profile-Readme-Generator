import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useColorMode } from "../../context/ThemeContext";

const DarkModeToggle = () => {
    const { toggleColorMode, mode } = useColorMode();

    return (
        <IconButton onClick={toggleColorMode} color="inherit">
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

export default DarkModeToggle;
