import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

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
