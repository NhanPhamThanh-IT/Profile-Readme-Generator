import { useState } from 'react';

export const useCopyMarkdownLogic = ({ markdown }) => {
    const [copied, setCopied] = useState(false);

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
