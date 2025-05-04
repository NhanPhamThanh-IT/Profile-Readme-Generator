import {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    Globe,
    FileText,
    Codepen
} from 'lucide-react';

export const socialPlatforms = [
    {
        name: 'github',
        label: 'GitHub',
        icon: <Github size={20} />,
        placeholder: 'https://github.com/username'
    },
    {
        name: 'linkedin',
        label: 'LinkedIn',
        icon: <Linkedin size={20} />,
        placeholder: 'https://linkedin.com/in/username'
    },
    {
        name: 'twitter',
        label: 'Twitter',
        icon: <Twitter size={20} />,
        placeholder: 'https://twitter.com/username'
    },
    {
        name: 'instagram',
        label: 'Instagram',
        icon: <Instagram size={20} />,
        placeholder: 'https://instagram.com/username'
    },
    {
        name: 'youtube',
        label: 'YouTube',
        icon: <Youtube size={20} />,
        placeholder: 'https://youtube.com/c/username'
    },
    {
        name: 'dev',
        label: 'DEV.to',
        icon: <FileText size={20} />,
        placeholder: 'https://dev.to/username'
    },
    {
        name: 'medium',
        label: 'Medium',
        icon: <Globe size={20} />,
        placeholder: 'https://medium.com/@username'
    },
    {
        name: 'codepen',
        label: 'CodePen',
        icon: <Codepen size={20} />,
        placeholder: 'https://codepen.io/username'
    },
];