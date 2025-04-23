import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { styles } from '@styles/components/buttons/ActionButton';

export const ActionButton = ({ label, link, darkMode }) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);

    return (
        <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            onClick={() => navigate(link)}
            sx={style.button}
        >
            {label}
        </Button>
    )
};

export default ActionButton;