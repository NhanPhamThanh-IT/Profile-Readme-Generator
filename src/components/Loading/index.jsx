import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import constants from './constants';
import styles from './styles';

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
}

export default Loading;
