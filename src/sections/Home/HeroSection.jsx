import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { styles } from '@styles/sections/HeroSection.js';
import { HERO_TITLE, HERO_DESCRIPTION, BUTTON_LABEL } from '@constants/HeroSection.js';
import ActionButton from '@components/buttons/ActionButton.jsx';

export const HeroSection = ({ darkMode }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const style = useMemo(() => styles(theme, darkMode, isMobile), [theme, darkMode, isMobile]);

    return (
        <Box sx={style.container}>
            <Typography variant="h3" component="h1" gutterBottom sx={style.title}>
                {HERO_TITLE}
            </Typography>
            <Typography variant="h6" component="p" sx={style.description}>
                {HERO_DESCRIPTION}
            </Typography>
            <ActionButton label={BUTTON_LABEL} link='/generator' darkMode={darkMode} />
        </Box>
    );
};

export default HeroSection;
