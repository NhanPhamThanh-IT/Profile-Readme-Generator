import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { desktopMenuStyles } from '@styles/components/layouts/Header';

/**
 * DesktopMenu component renders a navigation menu for desktop views. It displays buttons for each page, where each button
 * links to a corresponding path. The button styles change based on the current route and the theme (dark or light mode).
 *
 * @component
 * @example
 * // Example usage of the DesktopMenu component
 * <DesktopMenu pages={pages} location={location} darkMode={true} />
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.pages - An array of page objects. Each object must contain `name` (the label for the button) and `path` (the route path).
 * @param {Object} props.location - The current location object from `react-router-dom`. Used to apply active styles to the current page button.
 * @param {boolean} props.darkMode - A boolean indicating the current theme. `true` indicates dark mode, `false` indicates light mode.
 *
 * @returns {JSX.Element} A menu with navigation buttons for each page, styled according to the current route and theme.
 */
const DesktopMenu = ({ pages, location, darkMode }) => {
    const theme = useTheme();
    const styles = desktopMenuStyles(darkMode, theme, location);

    return (
        <Box sx={styles.container}>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={styles.button(page.path)}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    );
};

export default DesktopMenu;
