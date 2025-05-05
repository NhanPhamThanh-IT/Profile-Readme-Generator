/**
 * @file FeaturesSection.js
 * @description Contains data and configuration for the feature section of the Readme Generator application.
 */

import { Code, Eye, Copy, Save } from 'lucide-react';

/**
 * The title displayed in the feature section header.
 * @constant {string}
 */
export const TITLE = 'Powerful Features';

/**
 * The description text displayed under the feature section header.
 * @constant {string}
 */
export const DESCRIPTION = 'Discover all the tools designed to enhance your productivity and streamline your workflow';

/**
 * A list of feature items displayed in the UI.
 * Each feature includes an icon component, a title, and a description.
 *
 * @constant {Array<{icon: React.ComponentType, title: string, description: string}>}
 */
export const features = [
    {
        icon: Code,
        title: 'Easy Form Input',
        description: 'Quickly input your profile information using our intuitive form interface.',
    },
    {
        icon: Eye,
        title: 'Live Preview',
        description: 'See your README changes in real-time with our live markdown preview.',
    },
    {
        icon: Copy,
        title: 'Copy to Clipboard',
        description: 'Copy your generated README with a single click and paste it to GitHub.',
    },
    {
        icon: Save,
        title: 'Save Templates',
        description: 'Save your profile as a template to reuse or modify later.',
    },
];
