import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { styles } from '@styles/components/typography/Description';

export const Description = ({ label, darkMode }) => {
    const style = useMemo(() => styles(darkMode), [darkMode]);

    return (
        <Typography variant="h6" component="p" sx={style.description}>
            {label}
        </Typography>
    )
};