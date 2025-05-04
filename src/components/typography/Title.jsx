import { Typography } from "@mui/material";
import { styles } from "@styles/components/typography/Title";

/**
 * Title is a flexible heading component that allows you to set the typography
 * variant dynamically. It adapts its styling based on the current dark mode setting.
 *
 * The component uses MUI's `Typography` to apply consistent theme-aware styling,
 * and supports semantic HTML heading levels via the `component` prop.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The text content to be displayed as the title.
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled.
 * @param {string} [props.newVariant="h3"] - MUI typography variant and HTML element to use (e.g., "h1", "h2", "h3").
 *
 * @returns {JSX.Element} A styled, theme-aware title element.
 *
 * @example
 * <Title
 *   label="Welcome to the Dashboard"
 *   darkMode={true}
 *   newVariant="h2"
 * />
 */
export const Title = ({ label, darkMode, newVariant = "h3" }) => {
    return (
        <Typography
            variant={newVariant}
            component={newVariant}
            gutterBottom
            sx={styles(darkMode).title}
        >
            {label}
        </Typography>
    );
};
