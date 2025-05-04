import { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { styles } from '@styles/sections/HeroSection.js';
import { HERO_TITLE, HERO_DESCRIPTION, BUTTON_LABEL, BUTTON_LINK } from '@constants/Home/HeroSection.js';
import NavigationButton from '@components/buttons/NavigationButton';
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
            <NavigationButton
                label={BUTTON_LABEL}
                link={BUTTON_LINK}
                darkMode={darkMode}
            />
        </Box>
    );
};

export default HeroSection;
