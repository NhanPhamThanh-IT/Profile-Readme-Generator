/**
 * @file index.js
 * @description This file exports several custom React hooks used for managing various aspects of the profile generator and step handling.
 */

/**
 * Exports the `useGeneratorLogic` hook, which handles the logic for generating and updating markdown content based on user profile data.
 * 
 * @module useGeneratorLogic
 */
export * from './useGeneratorLogic';

/**
 * Exports the `useCopyMarkdownLogic` hook, which provides functionality for copying markdown content to the clipboard.
 * 
 * @module useCopyMarkdownLogic
 */
export * from './useCopyMarkdownLogic';

/**
 * Exports the `useStepHandlerLogic` hook, which manages the active step in a multi-step process and provides functions to navigate between steps.
 * 
 * @module useStepHandlerLogic
 */
export * from './useStepHandlerLogic';
