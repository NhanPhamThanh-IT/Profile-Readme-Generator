import React from 'react';
import { Paper, Stepper, Step, StepLabel, Box, Button, Divider } from '@mui/material';
import { ArrowLeft, ArrowRight, Eye, CircleCheck } from 'lucide-react';
import StepContent from '@components/forms';
import { generateMarkdown as buildMarkdown } from '@utils';
import { useStepHandlerLogic } from '@hooks';
import styles from '@styles/sections/FormStepper';

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
    const { activeStep, handleNext, handleBack } = useStepHandlerLogic();

    return (
        <Paper elevation={styles.paper(darkMode).elevation} sx={styles.paper(darkMode)}>
            <Stepper activeStep={activeStep} alternativeLabel sx={styles.stepper(darkMode)}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={styles.contentBox}>
                <StepContent step={activeStep} profileData={profileData} handleUpdateProfile={handleUpdateProfile} />
            </Box>

            <Divider sx={styles.divider} />

            <Box sx={styles.footerBox}>
                <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    startIcon={<ArrowLeft />}
                    sx={styles.activeStepButton(darkMode)}
                >
                    Back
                </Button>
                <Box>
                    {isMobile && (
                        <Button
                            variant="outlined"
                            onClick={() => setPreviewVisible(!previewVisible)}
                            startIcon={<Eye />}
                            sx={styles.previewButton}
                        >
                            {previewVisible ? 'Hide Preview' : 'Show Preview'}
                        </Button>
                    )}
                    {activeStep === steps.length - 1 ? (
                        <Button
                            variant="contained"
                            endIcon={<CircleCheck />}
                            onClick={() => setMarkdown(buildMarkdown(profileData))}
                            sx={styles.activeStepButton(darkMode)}
                        >
                            Done
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            endIcon={<ArrowRight />}
                            onClick={handleNext}
                            sx={styles.activeStepButton(darkMode)}
                        >
                            Next
                        </Button>
                    )}
                </Box>
            </Box>
        </Paper>
    );
};

export default FormStepper;
