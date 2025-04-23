import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
