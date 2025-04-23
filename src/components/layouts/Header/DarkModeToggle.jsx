import { Box, IconButton, Switch, useTheme } from '@mui/material';
import { Moon, Sun } from 'lucide-react';
import { boxStyles, getSwitchStyles } from '@styles/components/layouts';

const DarkModeToggle = ({ darkMode, toggleDarkMode, isMobile }) => {
    const theme = useTheme();

    const iconLightColor = theme.palette.teal.teal500;
    const iconDarkColor = theme.palette.teal.teal300;
    const iconColor = darkMode ? iconDarkColor : iconLightColor;

    return (
        <Box sx={boxStyles}>
            {isMobile ? (
                <IconButton onClick={toggleDarkMode} color="inherit">
                    {darkMode ? <Sun size={22.5} color={iconLightColor} /> : <Moon size={22.5} color={iconDarkColor} />}
                </IconButton>
            ) : (
                <>
                    <Sun size={22.5} color={iconColor} />
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        sx={getSwitchStyles(iconLightColor, iconDarkColor)}
                    />
                    <Moon size={22.5} color={iconColor} />
                </>
            )}
        </Box>
    );
};

export default DarkModeToggle;
