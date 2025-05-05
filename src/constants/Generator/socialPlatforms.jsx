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

/**
 * @file socialPlatforms.js
 * @description Contains a list of social platforms that a user can include in their Readme profile. Each platform
 * includes a name, label, icon, and a placeholder URL format for user input.
 */

/**
 * An array of social platforms available for inclusion in a user's profile.
 * Each platform contains its name, label (display name), associated icon, and a URL placeholder for the user's profile link.
 *
 * @constant {Object[]}
 * @property {string} name - The internal name used to reference the social platform.
 * @property {string} label - The display name of the social platform (e.g., 'GitHub').
 * @property {JSX.Element} icon - The icon representing the social platform, imported from 'lucide-react'.
 * @property {string} placeholder - A sample URL or format for the user's profile link (e.g., 'https://github.com/username').
 */
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