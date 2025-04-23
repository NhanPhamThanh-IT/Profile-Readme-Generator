import {
    Box,
    Container,
    Paper,
    Typography,
} from '@mui/material';
import { Github } from 'lucide-react';

import { HeroSection, FeaturesSection, LastSection } from '@sections/Home';

export const Home = ({ darkMode }) => {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, userSelect: 'none' }}>
            <HeroSection darkMode={darkMode} />

            <Box sx={{ mb: 8 }}>
                <Paper
                    elevation={darkMode ? 2 : 1}
                    sx={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: darkMode
                            ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: '200px', sm: '350px', md: '450px' },
                            bgcolor: '#f5f5f5',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: '#0d1117',
                                color: 'white',
                                p: 3,
                                overflow: 'auto',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Github size={24} />
                                <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                                    username / README.md
                                </Typography>
                            </Box>
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                                👋 Hi there! I'm Developer
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Full-stack developer passionate about creating awesome web experiences.
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                    🔭 Skills
                                </Typography>
                                <Typography variant="body1">
                                    JavaScript | React | Node.js | TypeScript | HTML | CSS
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                                    🌱 Projects
                                </Typography>
                                <Typography variant="body1">
                                    • Project One - A React-based application<br />
                                    • Project Two - Node.js backend API<br />
                                    • Project Three - Full-stack web app
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>

            <FeaturesSection darkMode={darkMode} />

            <LastSection darkMode={darkMode} />
        </Container>
    );
}

export default Home;
