import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Switch,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Github, Moon, Sun } from 'lucide-react';

export const Header = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Generator', path: '/generator' },
    ];

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                bgcolor: darkMode ? '#1a1a1a' : 'white',
                color: darkMode ? 'white' : 'text.primary'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    <Github className="mr-2" size={24} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Profile README Generator
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    component={RouterLink}
                                    to={page.path}
                                    selected={location.pathname === page.path}
                                >
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <Github className="mr-2" size={24} style={{ display: 'flex', md: 'none' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        README Gen
                    </Typography>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={RouterLink}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    mx: 1,
                                    color: 'inherit',
                                    display: 'block',
                                    fontWeight: location.pathname === page.path ? 700 : 500,
                                    borderBottom: location.pathname === page.path ? `2px solid ${theme.palette.primary.main}` : 'none',
                                    borderRadius: 0,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        borderBottom: `2px solid ${theme.palette.primary.main}`,
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Dark Mode Toggle */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {isMobile ? (
                            <IconButton onClick={toggleDarkMode} color="inherit">
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </IconButton>
                        ) : (
                            <>
                                <Sun size={20} />
                                <Switch
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    color="primary"
                                />
                                <Moon size={20} />
                            </>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
