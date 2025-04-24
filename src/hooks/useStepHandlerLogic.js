import { useState } from 'react';

export const useStepHandlerLogic = () => {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
    return {
        activeStep,
        handleNext,
        handleBack,
    }
};