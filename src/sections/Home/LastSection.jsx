import React from 'react';
import { Box, Typography } from '@mui/material';
import { ActionButton } from '@components/buttons';

export const LastSection = (darkMode) => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                py: 6,
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    mb: 2,
                }}
            >
                Ready to create your profile?
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                    mx: 'auto',
                }}
            >
                Create a professional GitHub profile README in minutes and stand out to recruiters,
                collaborators, and the open-source community.
            </Typography>

            <ActionButton
                label="Start Building"
                link="/generator"
                darkMode={darkMode}
            />
        </Box>
    )
};