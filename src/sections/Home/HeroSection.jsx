import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { styles } from '@styles/sections/HeroSection.js';
import { HERO_TITLE, HERO_DESCRIPTION, BUTTON_LABEL } from '@constants/HeroSection.js';
import ActionButton from '@components/buttons/ActionButton.jsx';
import { Title, Description } from '@components/typography';

export const HeroSection = ({ darkMode }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const style = useMemo(() => styles(theme, darkMode, isMobile), [theme, darkMode, isMobile]);

    return (
        <Box
            sx={style.container}
        >
            <Title
                label={HERO_TITLE}
                darkMode={darkMode}
            />
            <Description
                label={HERO_DESCRIPTION}
                darkMode={darkMode}
            />
            <ActionButton
                label={BUTTON_LABEL}
                link='/generator'
                darkMode={darkMode}
            />
        </Box>
    );
};

export default HeroSection;
