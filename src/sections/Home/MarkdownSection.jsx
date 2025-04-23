import { Box, Paper } from '@mui/material';
import { IMG_SRC, IMG_ALT } from '@constants/Home/MarkdownSection.js';
import { styles } from '@styles/sections/MarkdownSection.js';

export const MarkdownSection = ({ darkMode }) => {
    const style = styles(darkMode);

    return (
        <Box sx={style.container}>
            <Paper elevation={darkMode ? 12 : 4} sx={style.paper}>
                <img
                    src={IMG_SRC}
                    alt={IMG_ALT}
                    style={style.image}
                />
            </Paper>
        </Box>
    );
};
