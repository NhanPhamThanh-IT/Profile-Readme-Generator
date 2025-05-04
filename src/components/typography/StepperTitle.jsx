import { Typography } from '@mui/material';
import getStyles from '@styles/components/typography/StepperTitle';

export const StepperTitle = ({ label, darkMode }) => {
    const styles = getStyles(darkMode);
    return (
        <Typography variant="h6" component="h2" sx={styles.title} gutterBottom>
            {label}
        </Typography>
    )
}