import { Typography } from '@mui/material';
import getStyles from '@styles/components/typography/StepperTypography';

/**
 * StepperTitle is a styled heading component typically used in stepper-based UI flows
 * (e.g., multi-step forms or wizards). It adapts its appearance based on the dark mode setting.
 *
 * The component renders a `<h2>` element with the MUI `h6` variant and includes bottom spacing.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The heading text to be displayed.
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled.
 *
 * @returns {JSX.Element} A styled heading for use in step-based interfaces.
 *
 * @example
 * <StepperTitle
 *   label="Account Setup"
 *   darkMode={true}
 * />
 */
export const StepperTitle = ({ label, darkMode }) => {
    const styles = getStyles(darkMode);
    return (
        <Typography variant="h6" component="h2" sx={styles.title} gutterBottom>
            {label}
        </Typography>
    );
};

/**
 * StepperSubtitle is a supporting text component used under step titles
 * to provide additional context or instructions. It adapts its appearance
 * based on the dark mode setting.
 *
 * The component uses MUI's `body2` variant with paragraph formatting for clarity.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The descriptive or instructional text.
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled.
 *
 * @returns {JSX.Element} A styled paragraph of subtitle text.
 *
 * @example
 * <StepperSubtitle
 *   label="Please fill in your personal details to continue."
 *   darkMode={false}
 * />
 */
export const StepperSubtitle = ({ label, darkMode }) => {
    const styles = getStyles(darkMode);
    return (
        <Typography variant="body2" paragraph sx={styles.subtitle}>
            {label}
        </Typography>
    );
};
