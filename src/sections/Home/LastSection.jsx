import { Box } from '@mui/material';
import { NavigationButton } from '@components/buttons';
import { Title, Description } from '@components/typography';
import { TITLE, DESCRIPTION, BUTTON_LABEL, BUTTON_LINK } from '@constants/Home/LastSection.js';
import { styles } from '@styles/sections/LastSection.js';

export const LastSection = ({ darkMode }) => {
    return (
        <Box
            sx={styles.container}
        >
            <Title
                label={TITLE}
                darkMode={darkMode}
            />
            <Description
                label={DESCRIPTION}
                darkMode={darkMode}
            />
            <NavigationButton
                label={BUTTON_LABEL}
                link={BUTTON_LINK}
                darkMode={darkMode}
            />
        </Box>
    )
};