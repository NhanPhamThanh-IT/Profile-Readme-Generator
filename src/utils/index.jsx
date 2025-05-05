/**
 * Re-exports all named exports from the 'generateMarkdown.js' module.
 *
 * This allows other modules to import functions or constants from 'generateMarkdown.js'
 * via this file, serving as a centralized export point (barrel file).
 *
 * Example:
 *   import { generateReadme } from './utils';
 *   // instead of
 *   import { generateReadme } from './utils/generateMarkdown';
 */
export * from './generateMarkdown.js';
