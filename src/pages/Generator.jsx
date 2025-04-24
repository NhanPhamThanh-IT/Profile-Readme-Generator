import { useState } from 'react';
import { useMediaQuery, useTheme, Container, Grid, Paper, Box, Button, Divider, Stepper, Step, StepLabel } from '@mui/material';
import { ArrowLeft, ArrowRight, Eye, FileText } from 'lucide-react';
import { Title } from '@components/typography';
import MarkdownPreview from '@components/MarkdownPreview';
import StepContent from '@components/forms';
import { useGeneratorLogic } from '@hooks';
import { generateMarkdown as buildMarkdown } from '@utils';

const Generator = ({ darkMode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [previewVisible, setPreviewVisible] = useState(!isMobile);

    const {
        activeStep,
        profileData,
        markdown,
        copied,
        handleNext,
        handleBack,
        handleUpdateProfile,
        copyToClipboard,
        setMarkdown,
    } = useGeneratorLogic();

    const steps = ['Basic Info', 'Skills', 'Projects', 'Social Links', 'Stats & Badges'];

    return (
        <Container maxWidth="xl" sx={{ mt: 6, mb: 12 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <Title label="Create Your GitHub Profile README" darkMode={darkMode} newVariant="h5" />
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={previewVisible ? 6 : 12}>
                    <Paper elevation={darkMode ? 2 : 1} sx={{ p: 3, minHeight: '600px', display: 'flex', flexDirection: 'column' }}>
                        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Box sx={{ flexGrow: 1, mt: 2 }}>
                            <StepContent step={activeStep} profileData={profileData} handleUpdateProfile={handleUpdateProfile} />
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button disabled={activeStep === 0} onClick={handleBack} startIcon={<ArrowLeft />}>Back</Button>
                            <Box>
                                {isMobile && (
                                    <Button variant="outlined" onClick={() => setPreviewVisible(!previewVisible)} startIcon={<Eye />} sx={{ mr: 2 }}>
                                        {previewVisible ? 'Hide Preview' : 'Show Preview'}
                                    </Button>
                                )}
                                {activeStep === steps.length - 1 ? (
                                    <Button variant="contained" endIcon={<FileText />} onClick={() => setMarkdown(buildMarkdown(profileData))}>Generate README</Button>
                                ) : (
                                    <Button variant="contained" endIcon={<ArrowRight />} onClick={handleNext}>Next</Button>
                                )}
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {previewVisible && (
                    <Grid item xs={12} md={6}>
                        <MarkdownPreview markdown={markdown} darkMode={darkMode} copied={copied} copyToClipboard={copyToClipboard} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Generator;
