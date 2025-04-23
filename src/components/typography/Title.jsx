import { useMemo } from "react";
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import { styles } from "@styles/components/typography/Title";

export const Title = ({ label, darkMode, newVariant = "h3" }) => {
    const theme = useTheme();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);
    return (
        <Typography variant={newVariant} component={newVariant} gutterBottom sx={style.title}>
            {label}
        </Typography>
    )
}