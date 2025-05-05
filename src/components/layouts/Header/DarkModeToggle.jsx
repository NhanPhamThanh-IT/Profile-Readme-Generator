import { Box, IconButton, Switch, useTheme } from '@mui/material';
import { Moon, Sun } from 'lucide-react';
import { boxStyles, getSwitchStyles } from '@styles/components/layouts';

/**
 * DarkModeToggle component renders a toggle for switching between light and dark modes.
 * It uses icons and a switch to visually indicate the current theme state and allows the user to toggle between them.
 *
 * @component
 * @example
 * // Example usage of the DarkModeToggle component
 * <DarkModeToggle darkMode={true} toggleDarkMode={toggleDarkModeHandler} isMobile={false} />
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.darkMode - The current theme state. `true` indicates dark mode, `false` indicates light mode.
 * @param {function} props.toggleDarkMode - Function to toggle the theme between light and dark modes.
 * @param {boolean} props.isMobile - Boolean flag indicating whether the component is rendered on a mobile screen.
 * 
 * @returns {JSX.Element} A toggle switch component for dark mode, with icons representing the current theme state.
 */
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
