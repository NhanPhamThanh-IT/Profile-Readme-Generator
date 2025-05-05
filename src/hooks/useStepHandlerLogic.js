import { useState } from 'react';

/**
 * @file useStepHandlerLogic.js
 * @description A custom React hook that manages the step navigation logic for multi-step forms or wizards.
 * It provides functions to handle moving forward and backward between steps, as well as tracking the active step.
 */

/**
 * A custom hook that handles the logic for managing the active step in a multi-step process.
 * It allows for moving to the next step, going back to the previous step, and tracking the current active step.
 *
 * @function useStepHandlerLogic
 * @returns {Object} - An object containing the current active step and functions for step navigation.
 * @returns {number} activeStep - The index of the currently active step (starting from 0).
 * @returns {Function} handleNext - A function to move to the next step by incrementing the active step.
 * @returns {Function} handleBack - A function to move to the previous step by decrementing the active step.
 *
 * @example
 * const { activeStep, handleNext, handleBack } = useStepHandlerLogic();
 * handleNext(); // Moves to the next step
 * handleBack(); // Moves to the previous step
 */
export const useStepHandlerLogic = () => {
    const [activeStep, setActiveStep] = useState(0);

    /**
     * Moves to the next step by incrementing the active step.
     * @function handleNext
     */
    const handleNext = () => setActiveStep((prev) => prev + 1);

    /**
     * Moves to the previous step by decrementing the active step.
     * @function handleBack
     */
    const handleBack = () => setActiveStep((prev) => prev - 1);

    return {
        activeStep,
        handleNext,
        handleBack,
    };
};
