import {
    Paper,
    Typography
} from "@mui/material";
import {
    getStyles
} from "@styles/components/papers/EmptyPaper";

export const EmptyPaper = ({ message, darkMode }) => {
    const styles = getStyles(darkMode);

    return (
        <Paper
            variant="outlined"
            sx={styles.paperContainer}
        >
            <Typography variant="body1" gutterBottom sx={styles.message}>
                {message}
            </Typography>
        </Paper>
    );
};