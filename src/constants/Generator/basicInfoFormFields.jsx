/**
 * @file basicInfoFields.js
 * @description Contains the configuration for the basic information form fields used in the Readme Generator application.
 */

import { User, Github, Briefcase, MapPin, Globe, Info } from 'lucide-react';

/**
 * An array of field definitions used to render the basic information form.
 * Each field includes metadata such as label, name, placeholder, icon, size, and validation requirements.
 *
 * @constant {Array<{
 *   label: string,
 *   name: string,
 *   placeholder: string,
 *   icon: JSX.Element,
 *   size: { xs: number, sm?: number },
 *   required?: boolean,
 *   multiline?: boolean,
 *   rows?: number
 * }>}
 */
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

/**
 * Default export of the form field configuration for basic user information.
 */
export default basicInfoFormFields;
