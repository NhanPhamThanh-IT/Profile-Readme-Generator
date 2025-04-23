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
import { ArrowLeft, ArrowRight, Eye, FileText } from 'lucide-react';
import { Title } from '@components/Typography';
import BasicInfoForm from '@components/forms/BasicInfoForm';
import SkillsForm from '@components/forms/SkillsForm';
import ProjectsForm from '@components/forms/ProjectsForm';
import SocialsForm from '@components/forms/SocialsForm';
import StatsForm from '@components/forms/StatsForm';
import MarkdownPreview from '@components/MarkdownPreview';
import { generateMarkdown as buildMarkdown } from '@utils/generateMarkdown';
import { defaultProfileData } from '@constants/Generator/defaultProfileData';

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
                        <MarkdownPreview
                            markdown={markdown}
                            darkMode={darkMode}
                            copied={copied}
                            copyToClipboard={copyToClipboard}
                        />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default Generator;
