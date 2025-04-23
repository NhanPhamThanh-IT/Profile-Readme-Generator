import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import { Copy, Download } from 'lucide-react';
import MarkdownContent from './MarkdownContent';

function MarkdownPreview({ markdown, darkMode, copied, copyToClipboard }) {
    return (
        <Paper
            elevation={darkMode ? 2 : 1}
            sx={{
                p: 3,
                height: '100%',
                minHeight: '600px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                    README Preview
                </Typography>
                <Box>
                    <Button
                        variant={copied ? 'contained' : 'outlined'}
                        color={copied ? 'success' : 'primary'}
                        onClick={copyToClipboard}
                        startIcon={<Copy />}
                        size="small"
                        sx={{ mr: 1 }}
                    >
                        {copied ? 'Copied!' : 'Copy Markdown'}
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<Download />}
                        size="small"
                        href={`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`}
                        download="README.md"
                    >
                        Download
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Box
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                    bgcolor: darkMode ? '#0d1117' : '#f6f8fa',
                }}
            >
                <MarkdownContent markdown={markdown} darkMode={darkMode} />
            </Box>
        </Paper>
    );
}

export default MarkdownPreview;
