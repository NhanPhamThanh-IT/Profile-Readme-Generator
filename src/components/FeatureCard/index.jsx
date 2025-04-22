import { useState, useEffect } from 'react';
import { Paper, Box, Typography } from '@mui/material';

function FeatureCard({ icon, title, description, darkMode, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <Paper
            elevation={darkMode ? 2 : 1}
            sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: darkMode
                        ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    bgcolor: 'primary.main',
                    color: 'white',
                    mb: 3,
                }}
            >
                {icon}
            </Box>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
}

export default FeatureCard;
