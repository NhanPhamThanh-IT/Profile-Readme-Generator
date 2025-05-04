import { Typography } from "@mui/material"
import { styles } from "@styles/components/typography/Title";

export const Title = ({ label, darkMode, newVariant = "h3" }) => {
    return (
        <Typography variant={newVariant} component={newVariant} gutterBottom sx={styles(darkMode).title}>
            {label}
        </Typography>
    )
}