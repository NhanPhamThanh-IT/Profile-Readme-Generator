import { AppBar, Container, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import { pages } from '@constants/layouts'

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
                        <DesktopMenu pages={pages} location={location} darkMode={darkMode}/>
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
