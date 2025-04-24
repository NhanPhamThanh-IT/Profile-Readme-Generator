import React from 'react';
import { Paper, Stepper, Step, StepLabel, Box, Button, Divider } from '@mui/material';
import { ArrowLeft, ArrowRight, Eye, FileText } from 'lucide-react';
import StepContent from '@components/forms';
import { generateMarkdown as buildMarkdown } from '@utils';
import { useStepHandlerLogic } from '@hooks';

const steps = ['Basic Info', 'Skills', 'Projects', 'Social Links', 'Stats & Badges'];

export const FormStepper = ({
    darkMode,
    profileData,
    handleUpdateProfile,
    isMobile,
    previewVisible,
    setPreviewVisible,
    setMarkdown
}) => {

    const {
        activeStep,
        handleNext,
        handleBack
    } = useStepHandlerLogic();

    return (
        <Paper
            elevation={darkMode ? 2 : 1}
            sx={{ p: 3, minHeight: '600px', display: 'flex', flexDirection: 'column' }}
        >
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
                <Button disabled={activeStep === 0} onClick={handleBack} startIcon={<ArrowLeft />}>
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
                        <Button variant="contained" endIcon={<ArrowRight />} onClick={handleNext}>
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </Paper>
    );
};

export default FormStepper;
