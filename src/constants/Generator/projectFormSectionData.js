/**
 * @file sectionData.js
 * @description Contains the section-specific data for the "Projects" section of the Readme Generator application.
 */

/**
 * The data structure for the "Projects" section, which includes the section title, subtitle, and a message
 * to be displayed when no projects are added.
 *
 * @constant {Object}
 * @property {string} title - The title of the "Projects" section.
 * @property {string} subtitle - A brief description or instruction to encourage users to add their projects.
 * @property {string} emptyProjectMessage - A message shown when the user hasn't added any projects yet.
 */
export const sectionData = {
    title: "Projects",
    subtitle: "Add your best projects to showcase your skills and experience. You can add links to GitHub repositories or live demos.",
    emptyProjectMessage: "No projects added yet. Add some projects to display in your README.",
};
