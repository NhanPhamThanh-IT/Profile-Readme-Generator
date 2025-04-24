import BasicInfoForm from '@components/forms/BasicInfoForm';
import SkillsForm from '@components/forms/SkillsForm';
import ProjectsForm from '@components/forms/ProjectsForm';
import SocialsForm from '@components/forms/SocialsForm';
import StatsForm from '@components/forms/StatsForm';

const StepContent = ({ darkMode, step, profileData, handleUpdateProfile }) => {
    switch (step) {
        case 0:
            return <BasicInfoForm darkMode={darkMode} data={profileData.basic} onUpdate={(data) => handleUpdateProfile('basic', data)} />;
        case 1:
            return <SkillsForm data={profileData.skills} onUpdate={(data) => handleUpdateProfile('skills', data)} />;
        case 2:
            return <ProjectsForm data={profileData.projects} onUpdate={(data) => handleUpdateProfile('projects', data)} />;
        case 3:
            return <SocialsForm data={profileData.socials} onUpdate={(data) => handleUpdateProfile('socials', data)} />;
        case 4:
            return <StatsForm data={profileData.stats} onUpdate={(data) => handleUpdateProfile('stats', data)} githubUsername={profileData.basic.githubUsername} />;
        default:
            return 'Unknown step';
    }
};

export default StepContent;
