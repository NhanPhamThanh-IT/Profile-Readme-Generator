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

/**
 * MobileMenu component renders a navigation menu for mobile views. It displays a menu icon that, when clicked,
 * opens a menu with links to different pages. The selected page is highlighted, and the menu closes when a link is clicked.
 *
 * @component
 * @example
 * // Example usage of the MobileMenu component
 * <MobileMenu pages={pages} location={location} anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.pages - An array of page objects. Each object contains `name` (the label for the menu item) and `path` (the route path).
 * @param {Object} props.location - The current location object from `react-router-dom`. Used to apply the `selected` state to the active menu item.
 * @param {Object} props.anchorElNav - The element that the menu is anchored to. It controls where the menu will appear.
 * @param {function} props.setAnchorElNav - Function to set the `anchorElNav` state. Used to open/close the menu.
 * 
 * @returns {JSX.Element} A mobile-friendly menu that opens when clicked, with links to different pages.
 */
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
