import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

import { homeConstants } from '../constants';

export const Home = () => {
    return (
        <Container
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(#ddd 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    zIndex: 0,
                }}
            />

            <Box sx={{ zIndex: 10, maxWidth: 'xl' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
                    {homeConstants.title.split(homeConstants.highlightedWord)[0]}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'rgba(16, 185, 129, 1)' }}>
                    {homeConstants.highlightedWord}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', marginBottom: 4 }}>
                    {homeConstants.description}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#4caf50',
                            '&:hover': { backgroundColor: '#388e3c' },
                            color: 'white',
                            fontWeight: '600',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            boxShadow: 2,
                        }}
                    >
                        {homeConstants.buttons.start}
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#555',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            boxShadow: 1,
                            '&:hover': { backgroundColor: '#f1f1f1' },
                        }}
                    >
                        {homeConstants.buttons.sponsor}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;