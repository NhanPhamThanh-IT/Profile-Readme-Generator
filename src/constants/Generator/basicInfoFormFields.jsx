import { User, Github, Briefcase, MapPin, Globe, Info } from 'lucide-react';

export const basicInfoFormFields = [
    {
        label: 'Name',
        name: 'name',
        placeholder: 'John Doe',
        icon: <User size={20} />,
        size: { xs: 12, sm: 6 },
        required: true,
    },
    {
        label: 'GitHub Username',
        name: 'githubUsername',
        placeholder: 'johndoe',
        icon: <Github size={20} />,
        size: { xs: 12, sm: 6 },
        required: true,
    },
    {
        label: 'Professional Title',
        name: 'title',
        placeholder: 'Full Stack Developer | React Expert | Open Source Contributor',
        icon: <Briefcase size={20} />,
        size: { xs: 12 },
    },
    {
        label: 'About Me',
        name: 'about',
        placeholder: "I'm a passionate developer who loves to create innovative solutions...",
        multiline: true,
        rows: 4,
        icon: <Info size={20} />,
        size: { xs: 12 },
    },
    {
        label: 'Location',
        name: 'location',
        placeholder: 'San Francisco, CA',
        icon: <MapPin size={20} />,
        size: { xs: 12, sm: 6 },
    },
    {
        label: 'Personal Website',
        name: 'website',
        placeholder: 'https://johndoe.dev',
        icon: <Globe size={20} />,
        size: { xs: 12, sm: 6 },
    },
];

export default basicInfoFormFields;