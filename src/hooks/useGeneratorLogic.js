import { useState, useEffect } from 'react';
import { generateMarkdown as buildMarkdown } from '@utils/generateMarkdown';
import { defaultProfileData } from '@constants/Generator/defaultProfileData';

export const useGeneratorLogic = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [profileData, setProfileData] = useState(defaultProfileData);
    const [markdown, setMarkdown] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMarkdown(buildMarkdown(profileData));
    }, [profileData]);

    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

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

    return {
        activeStep,
        profileData,
        markdown,
        copied,
        handleNext,
        handleBack,
        handleUpdateProfile,
        copyToClipboard,
        setMarkdown,
    };
};

export default useGeneratorLogic;
