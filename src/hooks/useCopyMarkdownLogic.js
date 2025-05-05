import { useState } from 'react';

/**
 * @file useCopyMarkdownLogic.js
 * @description A custom React hook to handle the logic of copying markdown content to the clipboard.
 */

/**
 * A custom hook that provides logic for copying markdown content to the clipboard.
 * It includes a state variable to track whether the markdown has been copied and a function to perform the copy operation.
 *
 * @function useCopyMarkdownLogic
 * @param {Object} params - The parameters for the hook.
 * @param {string} params.markdown - The markdown content that will be copied to the clipboard.
 * @returns {Object} - An object containing the state and function for handling clipboard copying.
 * @returns {boolean} copied - A boolean indicating whether the markdown content has been copied to the clipboard.
 * @returns {Function} copyToClipboard - A function that copies the provided markdown content to the clipboard.
 *
 * @example
 * const { copied, copyToClipboard } = useCopyMarkdownLogic({ markdown: "## Example Markdown" });
 */
export const useCopyMarkdownLogic = ({ markdown }) => {
    const [copied, setCopied] = useState(false);

    /**
     * Copy the markdown content to the clipboard.
     * If the Clipboard API is available, it writes the markdown text to the clipboard and updates the state.
     * A success message is displayed for 1.25 seconds.
     *
     * @async
     * @function copyToClipboard
     */
    const copyToClipboard = async () => {
        if (!navigator.clipboard) {
            console.error('Clipboard API is not available in this environment');
            return;
        }

        try {
            await navigator.clipboard.writeText(markdown);
            setCopied(true);
            setTimeout(() => setCopied(false), 1250);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return {
        copied,
        copyToClipboard,
    };
};

