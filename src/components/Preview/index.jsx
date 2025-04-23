import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { marked } from 'marked';

const lightModeColors = {
    background: '#FFFFFF',
    text: '#212121',
    codeBackground: '#F5F5F5',
    codeText: '#333333',
    placeholderBackground: '#FAFAFA',
    placeholderText: '#757575',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
    linkColor: '#1976D2',
};

const darkModeColors = {
    background: '#121212',
    text: '#E0E0E0',
    codeBackground: '#272727',
    codeText: '#E0E0E0',
    placeholderBackground: '#424242',
    placeholderText: '#BDBDBD',
    boxShadow: 'rgba(255, 255, 255, 0.1)',
    linkColor: '#90CAF9',
};

function Preview({ markdown, darkMode }) {
    const [html, setHtml] = useState('');
    const colors = darkMode ? darkModeColors : lightModeColors;

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
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    textAlign: 'center',
                    borderRadius: '8px',
                    backgroundColor: colors.placeholderBackground,
                    color: colors.placeholderText,
                    boxShadow: `0 2px 4px ${colors.boxShadow}`,
                    transition: 'background-color 0.3s, color 0.3s',
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

    return (
        <Box
            className="markdown-preview fade-in"
            sx={{
                height: '100%',
                overflowY: 'auto',
                backgroundColor: colors.background,
                color: colors.text,
                paddingX: '16px',
                transition: 'background-color 0.3s, color 0.3s',
                '& h1, & h2, & h3, & h4, & h5, & h6': {
                    color: darkMode ? '#FFFFFF' : '#111111',
                    marginTop: '24px',
                    marginBottom: '16px',
                    borderBottom: `1px solid ${darkMode ? '#444' : '#eee'}`,
                    paddingBottom: '8px',
                },
                '& p': {
                    lineHeight: 1.6,
                    marginBottom: '16px',
                },
                '& a': {
                    color: colors.linkColor,
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
                '& blockquote': {
                    borderLeft: `4px solid ${darkMode ? '#666' : '#ccc'}`,
                    paddingLeft: '16px',
                    margin: '16px 0',
                    color: darkMode ? '#bdbdbd' : '#555',
                    backgroundColor: darkMode ? '#2c2c2c' : '#f9f9f9',
                    borderRadius: '4px',
                },
                '& ul, & ol': {
                    marginBottom: '16px',
                    paddingLeft: '30px',
                },
                '& li': {
                    marginBottom: '8px',
                },
                '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: `0 2px 4px ${colors.boxShadow}`,
                    marginTop: '16px',
                    marginBottom: '16px',
                },
                '& table': {
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '16px',
                    boxShadow: `0 1px 3px ${colors.boxShadow}`,
                },
                '& th, & td': {
                    border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
                    padding: '10px 12px',
                    textAlign: 'left',
                },
                '& thead th': {
                    backgroundColor: darkMode ? '#333' : '#f2f2f2',
                    fontWeight: 'bold',
                },
                '& tbody tr:nth-of-type(even)': {
                    backgroundColor: darkMode ? '#2a2a2a' : '#f9f9f9',
                },
                '& pre.code-block': {
                    backgroundColor: colors.codeBackground,
                    color: colors.codeText,
                    borderRadius: '8px',
                    boxShadow: `0 1px 3px ${colors.boxShadow}`,
                    padding: '16px',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    fontFamily: '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                    fontSize: '0.9em',
                    overflowX: 'auto',
                    margin: '16px 0',
                    transition: 'background-color 0.3s, color 0.3s',
                },
                '& :not(pre) > code': {
                    backgroundColor: darkMode ? '#444444' : '#e0e0e0',
                    color: darkMode ? '#f5f5f5' : '#c7254e',
                    padding: '3px 6px',
                    borderRadius: '4px',
                    fontFamily: '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                    fontSize: '0.85em',
                },
            }}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export default Preview;
