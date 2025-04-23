import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { mobileMenuStyles } from '@styles/components/layouts/Header';

const MobileMenu = ({ pages, location, anchorElNav, setAnchorElNav }) => {
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <Box sx={mobileMenuStyles.container}>
            <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={mobileMenuStyles.menuProps.anchorOrigin}
                transformOrigin={mobileMenuStyles.menuProps.transformOrigin}
            >
                {pages.map((page) => (
                    <MenuItem
                        key={page.name}
                        component={RouterLink}
                        to={page.path}
                        onClick={handleCloseNavMenu}
                        selected={location.pathname === page.path}
                    >
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default MobileMenu;
