import { useState, useEffect } from 'react';
import { generateMarkdown as buildMarkdown } from '@utils/generateMarkdown';
import { defaultProfileData } from '@constants/Generator/defaultProfileData';

export const useGeneratorLogic = () => {
    const [profileData, setProfileData] = useState(defaultProfileData);
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        setMarkdown(buildMarkdown(profileData));
    }, [profileData]);

    const handleUpdateProfile = (section, data) => {
        setProfileData((prev) => ({
            ...prev,
            [section]: data,
        }));
    };

    return {
        profileData,
        markdown,
        handleUpdateProfile,
        setMarkdown,
    };
};

export default useGeneratorLogic;
