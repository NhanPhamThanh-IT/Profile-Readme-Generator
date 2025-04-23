import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Paper,
    Grid,
    useMediaQuery,
    useTheme,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    Divider,
} from '@mui/material';
import { ArrowLeft, ArrowRight, Copy, Download, Eye, FileText } from 'lucide-react';
import { Title } from '@components/Typography';
import BasicInfoForm from '@components/forms/BasicInfoForm';
import SkillsForm from '@components/forms/SkillsForm';
import ProjectsForm from '@components/forms/ProjectsForm';
import SocialsForm from '@components/forms/SocialsForm';
import StatsForm from '@components/forms/StatsForm';
import Preview from '@components/Preview';
import { generateMarkdown as buildMarkdown } from '@utils/generateMarkdown';

export const defaultProfileData = {
    basic: {
        name: '',
        githubUsername: '',
        title: '',
        about: '',
        location: '',
        website: ''
    },
    skills: [],
    projects: [],
    socials: {
        github: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        youtube: '',
        dev: '',
        medium: '',
        codepen: ''
    },
    stats: {
        showGitHubStats: true,
        showTopLanguages: true,
        showStreak: false,
        theme: 'radical'
    }
};

function Generator({ darkMode }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeStep, setActiveStep] = useState(0);
    const [profileData, setProfileData] = useState(defaultProfileData);
    const [previewVisible, setPreviewVisible] = useState(!isMobile);
    const [markdown, setMarkdown] = useState('');
    const [copied, setCopied] = useState(false);

    const steps = ['Basic Info', 'Skills', 'Projects', 'Social Links', 'Stats & Badges'];

    useEffect(() => {
        setMarkdown(buildMarkdown(profileData));
    }, [profileData]);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleUpdateProfile = (section, data) => {
        setProfileData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(markdown);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <BasicInfoForm
                        data={profileData.basic}
                        onUpdate={(data) => handleUpdateProfile('basic', data)}
                    />
                );
            case 1:
                return (
                    <SkillsForm
                        data={profileData.skills}
                        onUpdate={(data) => handleUpdateProfile('skills', data)}
                    />
                );
            case 2:
                return (
                    <ProjectsForm
                        data={profileData.projects}
                        onUpdate={(data) => handleUpdateProfile('projects', data)}
                    />
                );
            case 3:
                return (
                    <SocialsForm
                        data={profileData.socials}
                        onUpdate={(data) => handleUpdateProfile('socials', data)}
                    />
                );
            case 4:
                return (
                    <StatsForm
                        data={profileData.stats}
                        onUpdate={(data) => handleUpdateProfile('stats', data)}
                        githubUsername={profileData.basic.githubUsername}
                    />
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 6, mb: 12 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <Title label="Create Your GitHub Profile README" darkMode={darkMode} newVariant="h5" />
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={previewVisible ? 6 : 12}>
                    <Paper
                        elevation={darkMode ? 2 : 1}
                        sx={{
                            p: 3,
                            height: '100%',
                            minHeight: '600px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Box sx={{ flexGrow: 1, mt: 2 }}>
                            {getStepContent(activeStep)}
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                startIcon={<ArrowLeft />}
                            >
                                Back
                            </Button>
                            <Box>
                                {isMobile && (
                                    <Button
                                        variant="outlined"
                                        onClick={() => setPreviewVisible(!previewVisible)}
                                        startIcon={<Eye />}
                                        sx={{ mr: 2 }}
                                    >
                                        {previewVisible ? 'Hide Preview' : 'Show Preview'}
                                    </Button>
                                )}
                                {activeStep === steps.length - 1 ? (
                                    <Button
                                        variant="contained"
                                        endIcon={<FileText />}
                                        onClick={() => setMarkdown(buildMarkdown(profileData))}
                                    >
                                        Generate README
                                    </Button>
                                ) : (
                                    <Button
                                        variant="contained"
                                        endIcon={<ArrowRight />}
                                        onClick={handleNext}
                                    >
                                        Next
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {previewVisible && (
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={darkMode ? 2 : 1}
                            sx={{
                                p: 3,
                                height: '100%',
                                minHeight: '600px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                                    README Preview
                                </Typography>
                                <Box>
                                    <Button
                                        variant={copied ? 'contained' : 'outlined'}
                                        color={copied ? 'success' : 'primary'}
                                        onClick={copyToClipboard}
                                        startIcon={<Copy />}
                                        size="small"
                                        sx={{ mr: 1 }}
                                    >
                                        {copied ? 'Copied!' : 'Copy Markdown'}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<Download />}
                                        size="small"
                                        href={`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`}
                                        download="README.md"
                                    >
                                        Download
                                    </Button>
                                </Box>
                            </Box>

                            <Divider sx={{ mb: 3 }} />

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    overflow: 'auto',
                                    bgcolor: darkMode ? '#0d1117' : '#f6f8fa',
                                }}
                            >
                                <Preview markdown={markdown} darkMode={darkMode} />
                            </Box>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default Generator;
