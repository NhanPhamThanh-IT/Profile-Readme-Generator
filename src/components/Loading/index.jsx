import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import constants from '@constants/components/loading.js';
import styles from './styles';

/**
 * Loading is a visual placeholder component that displays a loading state
 * using Material UI's `Skeleton` components. It simulates the layout of
 * actual content to improve perceived performance while data is being fetched.
 *
 * This component is useful for pages or sections that require asynchronous
 * data loading, such as dashboards, forms, or reports.
 *
 * @component
 *
 * @returns {JSX.Element} A loading indicator with skeleton placeholders and a message.
 *
 * @example
 * <Loading />
 */
export const Loading = () => {
    return (
        <Box sx={styles.root}>
            <Box sx={styles.skeletonGroup}>
                <Skeleton variant="rectangular" sx={styles.skeletonElement} />
                <Skeleton variant="rectangular" sx={styles.skeletonElement} />
            </Box>
            <Box sx={styles.skeletonGroup}>
                <Skeleton variant="rectangular" sx={styles.skeletonElement} />
                <Skeleton variant="rectangular" sx={styles.skeletonElement} />
            </Box>
            <Typography variant="h6" sx={styles.message}>
                {constants.message}
            </Typography>
        </Box>
    );
};

export default Loading;
