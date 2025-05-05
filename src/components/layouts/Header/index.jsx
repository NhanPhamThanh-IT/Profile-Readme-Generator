import { AppBar, Container, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import { pages } from '@constants/layouts'

/**
 * Header component renders the navigation bar of the application. It adjusts the menu display for mobile and desktop views
 * and includes a logo and dark mode toggle. The header's background and text color change based on the current theme (dark or light).
 *
 * @component
 * @example
 * // Example usage of the Header component
 * <Header darkMode={true} toggleDarkMode={toggleDarkModeHandler} />
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.darkMode - The current theme state. `true` indicates dark mode, `false` indicates light mode.
 * @param {function} props.toggleDarkMode - Function to toggle the theme between light and dark modes.
 * 
 * @returns {JSX.Element} A header component that includes a logo, navigation menu (desktop or mobile), and a dark mode toggle.
 */
const Header = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorElNav, setAnchorElNav] = useState(null);

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: darkMode ? '#1a1a1a' : 'white',
                color: darkMode ? 'white' : 'text.primary',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo isMobile={false} />
                    {isMobile ? (
                        <MobileMenu
                            pages={pages}
                            location={location}
                            anchorElNav={anchorElNav}
                            setAnchorElNav={setAnchorElNav}
                        />
                    ) : (
                        <DesktopMenu pages={pages} location={location} darkMode={darkMode} />
                    )}
                    <DarkModeToggle
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                        isMobile={isMobile}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
