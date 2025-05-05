/**
 * StepContent component
 *
 * This component dynamically renders the appropriate form step
 * in a multi-step GitHub profile README generator based on the current step index.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled
 * @param {number} props.step - Current step index in the form wizard
 * @param {Object} props.profileData - Object containing all sections of the profile data
 * @param {Object} props.profileData.basic - Basic information form data
 * @param {Object} props.profileData.skills - Skills form data
 * @param {Object} props.profileData.projects - Projects form data
 * @param {Object} props.profileData.socials - Social media links form data
 * @param {Object} props.profileData.stats - GitHub stats form data
 * @param {Function} props.handleUpdateProfile - Callback function to update a specific section of profile data
 * @returns {JSX.Element|string} A rendered form component corresponding to the current step, or a fallback string
 */

import BasicInfoForm from '@components/forms/BasicInfoForm';
import SkillsForm from '@components/forms/SkillsForm';
import ProjectsForm from '@components/forms/ProjectsForm';
import SocialsForm from '@components/forms/SocialsForm';
import StatsForm from '@components/forms/StatsForm';

const StepContent = ({ darkMode, step, profileData, handleUpdateProfile }) => {
    switch (step) {
        case 0:
            return (
                <BasicInfoForm
                    darkMode={darkMode}
                    data={profileData.basic}
                    onUpdate={(data) => handleUpdateProfile('basic', data)}
                />
            );
        case 1:
            return (
                <SkillsForm
                    darkMode={darkMode}
                    data={profileData.skills}
                    onUpdate={(data) => handleUpdateProfile('skills', data)}
                />
            );
        case 2:
            return (
                <ProjectsForm
                    darkMode={darkMode}
                    data={profileData.projects}
                    onUpdate={(data) => handleUpdateProfile('projects', data)}
                />
            );
        case 3:
            return (
                <SocialsForm
                    darkMode={darkMode}
                    data={profileData.socials}
                    onUpdate={(data) => handleUpdateProfile('socials', data)}
                />
            );
        case 4:
            return (
                <StatsForm
                    darkMode={darkMode}
                    data={profileData.stats}
                    githubUsername={profileData.basic.githubUsername}
                    onUpdate={(data) => handleUpdateProfile('stats', data)}
                />
            );
        default:
            return 'Unknown step';
    }
};

export default StepContent;
