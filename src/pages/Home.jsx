import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import { ArrowRight, Github, Code, Eye, Copy, Save } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

import { HeroSection } from '../sections/Home';

export const Home = ({ darkMode }) => {
    const navigate = useNavigate();

    const features = [
        {
            icon: <Code size={24} />,
            title: 'Easy Form Input',
            description: 'Quickly input your profile information using our intuitive form interface.',
        },
        {
            icon: <Eye size={24} />,
            title: 'Live Preview',
            description: 'See your README changes in real-time with our live markdown preview.',
        },
        {
            icon: <Copy size={24} />,
            title: 'Copy to Clipboard',
            description: 'Copy your generated README with a single click and paste it to GitHub.',
        },
        {
            icon: <Save size={24} />,
            title: 'Save Templates',
            description: 'Save your profile as a template to reuse or modify later.',
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
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

            <Typography
                variant="h4"
                component="h2"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Features
            </Typography>

            <Grid container spacing={4} sx={{ mb: 8 }}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            darkMode={darkMode}
                            delay={index * 0.1}
                        />
                    </Grid>
                ))}
            </Grid>

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
                <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    onClick={() => navigate('/generator')}
                    sx={{
                        px: 4,
                        py: 1.5,
                    }}
                >
                    Start Building
                </Button>
            </Box>
        </Container>
    );
}

export default Home;
