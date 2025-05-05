/**
 * @file skillsSectionData.js
 * @description Contains the section-specific data for the "Skills & Technologies" section of the Readme Generator application.
 */

/**
 * The data structure for the "Skills & Technologies" section, which includes the section title, description,
 * and a message displayed when no skills are added.
 *
 * @constant {Object}
 * @property {string} title - The title of the "Skills & Technologies" section.
 * @property {string} description - A brief description or instruction to encourage users to add their skills and technologies.
 * @property {string} emptySkillsDescription - A message shown when the user hasn't added any skills yet.
 */
export const sectionData = {
    title: 'Skills & Technologies',
    description: `Add the technologies, programming languages, and tools you're proficient with. These will be displayed as a section in your README.`,
    emptySkillsDescription: 'No skills added yet. Add some skills to display in your README.',
};
