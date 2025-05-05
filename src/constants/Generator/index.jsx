/**
 * @file index.js
 * @description Centralized exports for various data modules in the Readme Generator application.
 * These exports aggregate and simplify access to profile data, form fields, and skill lists across the application.
 */

/**
 * Exports the default profile data structure.
 * This data includes basic information, skills, projects, social links, and statistics settings for user profiles.
 * @module defaultProfileData
 */
export * from './defaultProfileData.js';

/**
 * Exports the basic information form fields configuration.
 * This includes labels, placeholders, icons, and validation requirements for form inputs related to user profile details.
 * @module basicInfoFormFields
 */
export * from './basicInfoFormFields.jsx';

/**
 * Exports the common skills list.
 * A collection of commonly used technologies and tools across various domains in software development.
 * @module commonSkills
 */
export * from './commonSkills.js';
