/**
 * @file profileData.js
 * @description Contains the default profile data structure for a user in the Readme Generator application.
 */

/**
 * The default structure for a user's profile data, including personal information, skills, projects, social media links, and statistics settings.
 * This object is used to initialize a new user profile with default values.
 *
 * @constant {Object}
 * @property {Object} basic - The basic personal information for the user.
 * @property {string} basic.name - The user's full name.
 * @property {string} basic.githubUsername - The user's GitHub username.
 * @property {string} basic.title - The user's professional title.
 * @property {string} basic.about - A brief description about the user.
 * @property {string} basic.location - The user's location.
 * @property {string} basic.website - The user's personal website URL.
 * @property {Array<string>} skills - A list of the user's technical skills.
 * @property {Array<Object>} projects - A list of the user's projects.
 * @property {Object} socials - The user's social media links.
 * @property {string} socials.github - The GitHub profile URL.
 * @property {string} socials.linkedin - The LinkedIn profile URL.
 * @property {string} socials.twitter - The Twitter profile URL.
 * @property {string} socials.instagram - The Instagram profile URL.
 * @property {string} socials.youtube - The YouTube profile URL.
 * @property {string} socials.dev - The DEV.to profile URL.
 * @property {string} socials.medium - The Medium profile URL.
 * @property {string} socials.codepen - The CodePen profile URL.
 * @property {Object} stats - User statistics settings for profile display.
 * @property {boolean} stats.showGitHubStats - Whether to display GitHub stats on the profile.
 * @property {boolean} stats.showTopLanguages - Whether to display the top languages section on the profile.
 * @property {boolean} stats.showStreak - Whether to display the streak statistics on the profile.
 * @property {string} stats.theme - The theme style for displaying statistics (e.g., 'radical').
 */
export const defaultProfileData = {
    basic: {
        name: '',
        githubUsername: '',
        title: '',
        about: '',
        location: '',
        website: ''
    },
    skills: [],
    projects: [],
    socials: {
        github: '',
        linkedin: '',
        twitter: '',
        instagram: '',
        youtube: '',
        dev: '',
        medium: '',
        codepen: ''
    },
    stats: {
        showGitHubStats: true,
        showTopLanguages: true,
        showStreak: false,
        theme: 'radical'
    }
};
