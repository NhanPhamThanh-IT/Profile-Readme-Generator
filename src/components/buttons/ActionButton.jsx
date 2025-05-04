import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { styles } from '@styles/components/buttons/ActionButton';

export const ActionButton = ({ label, icon, onClick, darkMode }) => {
    const theme = useTheme();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);

    return (
        <Button
            variant="contained"
            onClick={onClick}
            startIcon={icon}
            sx={style.button}
        >
            {label}
        </Button>
    )
}