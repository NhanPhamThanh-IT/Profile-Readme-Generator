import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Logo component renders the application logo as a clickable link. The text and display style change based on the screen size (mobile vs desktop).
 * The logo redirects to the homepage when clicked.
 *
 * @component
 * @example
 * // Example usage of the Logo component
 * <Logo isMobile={true} />
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.isMobile - A boolean indicating whether the component is displayed in a mobile view. 
 *                                  When `true`, it shows a shorter logo text for mobile; otherwise, it shows the full logo text.
 *
 * @returns {JSX.Element} A logo that links to the homepage with conditional text and display style based on the screen size.
 */
const Logo = ({ isMobile }) => (
    <Typography
        variant="h6"
        noWrap
        component={RouterLink}
        to="/"
        sx={{
            mr: 2,
            display: { xs: isMobile ? 'flex' : 'none', md: isMobile ? 'none' : 'flex' },
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: isMobile ? 1 : 0,
        }}
    >
        {isMobile ? 'README Gen' : 'Profile README Generator'}
    </Typography>
);

export default Logo;
