import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Loading, Layout } from '../components';

const Home = lazy(() => import('../pages/Home'));
const Generator = lazy(() => import('../pages/Generator'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

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
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: isMobile ? 2 : 4,
                }}
            >
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
                        >
                            <Route index element={<Home darkMode={darkMode} />} />
                            <Route path="generator" element={<Generator darkMode={darkMode} />} />
                            <Route path="*" element={<NotFound darkMode={darkMode} />} />
                        </Route>
                    </Routes>
                </Suspense>
            </Box>
        </Box>
    );
}

export default App;
