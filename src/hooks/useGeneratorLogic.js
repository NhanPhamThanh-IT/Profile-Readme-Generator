import { useState, useEffect } from 'react';
import { generateMarkdown as buildMarkdown } from '@utils/generateMarkdown';
import { defaultProfileData } from '@constants/Generator/defaultProfileData';

/**
 * @file useGeneratorLogic.js
 * @description A custom React hook that handles the logic for generating and updating the markdown content based on user profile data.
 * It includes state management for profile data, markdown content, and functions to update the profile sections.
 */

/**
 * A custom hook for generating and managing markdown content based on a user's profile data.
 * It allows for updating specific sections of the profile and automatically generates the corresponding markdown.
 *
 * @function useGeneratorLogic
 * @returns {Object} - An object containing the state and functions related to profile data and markdown generation.
 * @returns {Object} profileData - The current profile data, including sections like basic information, skills, projects, and more.
 * @returns {string} markdown - The generated markdown content based on the current profile data.
 * @returns {Function} handleUpdateProfile - A function that allows updating specific sections of the profile data.
 * @returns {Function} setMarkdown - A function to directly update the markdown content.
 *
 * @example
 * const { profileData, markdown, handleUpdateProfile } = useGeneratorLogic();
 * handleUpdateProfile('basic', { name: 'John Doe', githubUsername: 'johndoe' });
 */
export const useGeneratorLogic = () => {
    const [profileData, setProfileData] = useState(defaultProfileData);
    const [markdown, setMarkdown] = useState('');

    /**
     * Updates the markdown content whenever the profile data changes.
     * This effect runs every time the profileData state is updated.
     *
     * @function useEffect
     */
    useEffect(() => {
        setMarkdown(buildMarkdown(profileData));
    }, [profileData]);

    /**
     * Updates a specific section of the profile data.
     * 
     * @function handleUpdateProfile
     * @param {string} section - The name of the section to update (e.g., 'basic', 'skills').
     * @param {Object} data - The new data for the specified section.
     */
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
