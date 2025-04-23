import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import Home from '@pages/Home';
import Generator from '@pages/Generator';

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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isMobile ? 2 : 4,
        }}
      >
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/generator" element={<Generator darkMode={darkMode} />} />
        </Routes>
      </Box>
      <Footer darkMode={darkMode} />
    </Box>
  );
}

export default App;