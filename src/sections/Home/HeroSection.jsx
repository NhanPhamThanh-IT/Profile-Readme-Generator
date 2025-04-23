import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { styles } from '@styles/sections/HeroSection.js';
import { HERO_TITLE, HERO_DESCRIPTION, BUTTON_LABEL } from '@constants/HeroSection.js';

export const HeroSection = ({ darkMode }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const style = useMemo(() => styles(theme, darkMode, isMobile), [theme, darkMode, isMobile]);

    const navigate = useNavigate();

    return (
        <Box sx={style.container}>
            <Typography variant="h3" component="h1" gutterBottom sx={style.title}>
                {HERO_TITLE}
            </Typography>
            <Typography variant="h6" component="p" sx={style.description}>
                {HERO_DESCRIPTION}
            </Typography>
            <Button
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                onClick={() => navigate('/generator')}
                sx={style.button}
            >
                {BUTTON_LABEL}
            </Button>
        </Box>
    );
};

export default HeroSection;
