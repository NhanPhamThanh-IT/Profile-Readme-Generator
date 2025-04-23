import { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { marked } from 'marked';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Preview({ markdown, darkMode }) {
    const theme = useTheme();
    const [html, setHtml] = useState('');

    useEffect(() => {
        // Configure marked with custom renderer
        const renderer = new marked.Renderer();

        // Custom code block rendering with syntax highlighting
        renderer.code = (code, language) => {
            return `<pre class="language-${language}"><code class="language-${language}">${code}</code></pre>`;
        };

        marked.setOptions({
            renderer,
            breaks: true,
            gfm: true,
        });

        // Convert markdown to HTML
        const rawHtml = marked.parse(markdown);
        setHtml(rawHtml);
    }, [markdown]);

    // If there's no markdown, show a placeholder
    if (!markdown.trim()) {
        return (
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'text.secondary',
                    p: 3,
                    textAlign: 'center',
                }}
            >
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Your README preview will appear here as you fill out the form.
                </Typography>
                <Typography variant="body2">
                    Start by entering your basic information in the first step.
                </Typography>
            </Box>
        );
    }

    // Process the HTML to apply syntax highlighting
    const processedHtml = html.replace(
        /<pre class="language-(\w+)"><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
        (match, lang1, lang2, code) => {
            try {
                const language = lang1 || 'text';
                const highlightedCode = SyntaxHighlighter({
                    children: code,
                    style: darkMode ? tomorrow : prism,
                    language,
                    PreTag: 'div',
                });
                return highlightedCode;
            } catch (error) {
                console.error('Error highlighting code:', error);
                return match; // Return original if highlighting fails
            }
        }
    );

    return (
        <Box
            className="markdown-preview fade-in"
            sx={{
                '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                },
            }}
            dangerouslySetInnerHTML={{ __html: processedHtml }}
        />
    );
}

export default Preview;
