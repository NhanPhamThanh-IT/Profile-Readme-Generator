import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { marked } from 'marked';
import getPreviewStyles from '@styles/components/others/MarkdownContent.js';

function Preview({ markdown, darkMode }) {
    const [html, setHtml] = useState('');
    const styles = getPreviewStyles(darkMode);

    useEffect(() => {
        const renderer = new marked.Renderer();
        renderer.code = (code, language) => {
            const languageClass = language || 'text';
            return `<pre class="language-${languageClass} code-block"><code class="language-${languageClass}">${code}</code></pre>`;
        };

        marked.setOptions({
            renderer,
            breaks: true,
            gfm: true,
        });

        const rawHtml = marked.parse(markdown);
        setHtml(rawHtml);
    }, [markdown]);

    if (!markdown.trim()) {
        return (
            <Box sx={styles.placeholderBox}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Your README preview will appear here as you fill out the form.
                </Typography>
                <Typography variant="body2">
                    Start by entering your basic information in the first step.
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            className="markdown-preview fade-in"
            sx={styles.previewBox}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export default Preview;
