/**
 * @file MarkdownSection.js
 * @description Contains constants for image resources used in the Readme Generator application.
 */

/**
 * The URL source of the markdown example image.
 * Uses Vite's `import.meta.url` to resolve the image path at build time.
 * @constant {string}
 */
export const IMG_SRC = new URL('@assets/markdown_example.png', import.meta.url).href;

/**
 * The alt text for the markdown example image.
 * Used for accessibility and when the image cannot be displayed.
 * @constant {string}
 */
export const IMG_ALT = "Markdown Example";
