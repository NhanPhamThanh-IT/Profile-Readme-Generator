import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

/**
 * Layout component serves as a wrapper for the entire page layout. It includes a header, footer, and a main content area.
 * It handles the display of the layout based on the current theme (dark or light mode) and adjusts for mobile screens.
 * 
 * @component
 * @example
 * // Example usage of the Layout component
 * <Layout darkMode={true} toggleDarkMode={toggleDarkModeHandler} />
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.darkMode - The current theme state. `true` indicates dark mode, `false` indicates light mode.
 * @param {function} props.toggleDarkMode - Function to toggle the theme between light and dark modes.
 * 
 * @returns {JSX.Element} A layout wrapper with a header, footer, and dynamic main content area.
 */
const Layout = ({ darkMode, toggleDarkMode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                bgcolor: darkMode ? '#121212' : '#f5f7fa',
                color: darkMode ? '#f5f7fa' : '#121212',
            }}
        >
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: isMobile ? 2 : 4,
                }}
            >
                <Outlet />
            </Box>
            <Footer darkMode={darkMode} />
        </Box>
    );
};

export default Layout;
