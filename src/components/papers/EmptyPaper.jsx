import {
    Paper,
    Typography
} from "@mui/material";
import {
    getStyles
} from "@styles/components/papers/EmptyPaper";

/**
 * EmptyPaper is a reusable component that displays a styled message inside a Material UI `Paper`.
 * It is typically used to show placeholder content, such as empty states or informative notices
 * when no data is available.
 *
 * The component supports dark mode styling through dynamic style generation.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.message - The text message displayed inside the paper.
 * @param {boolean} props.darkMode - Indicates whether dark mode is active.
 *
 * @returns {JSX.Element} A styled paper container displaying the provided message.
 *
 * @example
 * <EmptyPaper
 *   message="No data available at the moment."
 *   darkMode={true}
 * />
 */
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
