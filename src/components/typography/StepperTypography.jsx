import { Typography } from '@mui/material';
import getStyles from '@styles/components/typography/StepperTypography';

export const StepperTitle = ({ label, darkMode }) => {
    const styles = getStyles(darkMode);
    return (
        <Typography variant="h6" component="h2" sx={styles.title} gutterBottom>
            {label}
        </Typography>
    )
}

export const StepperSubtitle = ({ label, darkMode }) => {
    const styles = getStyles(darkMode);
    return (
        <Typography variant="body2" paragraph sx={styles.subtitle}>
            {label}
        </Typography>
    )
}