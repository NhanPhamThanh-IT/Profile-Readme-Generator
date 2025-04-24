import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Divider,
    Button,
} from '@mui/material';
import { Copy, Download } from 'lucide-react';
import MarkdownContent from '@components/markdowns/MarkdownContent';
import { useCopyMarkdownLogic } from '@hooks';
import styles from '@styles/sections/MarkdownPreview.js';

export function MarkdownPreview({ darkMode, markdown }) {
    const {
        copied,
        copyToClipboard
    } = useCopyMarkdownLogic({ markdown: markdown });
    const sx = styles(darkMode, copied);

    return (
        <Paper elevation={sx.paper.elevation} sx={sx.paper.sx}>
            <Box sx={sx.header}>
                <Typography variant="h6" component="h2" sx={sx.title}>
                    Preview
                </Typography>
                <Box>
                    <Button
                        variant={copied ? 'contained' : 'outlined'}
                        onClick={copyToClipboard}
                        startIcon={<Copy />}
                        size="small"
                        sx={sx.copyButton.sx}
                    >
                        {copied ? 'Copied!' : 'Copy Markdown'}
                    </Button>
                    <Button
                        variant="outlined"
                        color={sx.downloadButton.color}
                        startIcon={<Download />}
                        size="small"
                        href={`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`}
                        download="README.md"
                        sx={sx.downloadButton.sx}
                    >
                        Download
                    </Button>
                </Box>
            </Box>

            <Divider sx={sx.divider} />

            <Box sx={sx.markdownBox}>
                <MarkdownContent markdown={markdown} darkMode={darkMode} />
            </Box>
        </Paper>
    );
}

export default MarkdownPreview;
