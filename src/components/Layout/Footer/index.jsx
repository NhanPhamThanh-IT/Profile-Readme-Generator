import { Box, Container, Typography, Link, Stack, useTheme } from '@mui/material';
import { Github, Heart } from 'lucide-react';

export const Footer = ({ darkMode }) => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: 'auto',
                bgcolor: darkMode ? '#1a1a1a' : 'white',
                color: darkMode ? 'white' : 'text.primary'
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2025 Profile README Generator
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                            Made with
                        </Typography>
                        <Heart size={16} color={theme.palette.error.main} />
                        <Typography variant="body2" color="text.secondary" sx={{ mx: 1 }}>
                            by Developers
                        </Typography>
                    </Box>

                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.primary',
                            textDecoration: 'none',
                            '&:hover': {
                                color: theme.palette.primary.main,
                            }
                        }}
                    >
                        <Github size={18} />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                            View on GitHub
                        </Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
