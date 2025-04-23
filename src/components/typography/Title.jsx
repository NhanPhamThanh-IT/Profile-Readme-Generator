import { useMemo } from "react";
import { Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles";
import { styles } from "@styles/components/typography/Title";

export const Title = ({ label, darkMode }) => {
    const theme = useTheme();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);
    return (
        <Typography variant="h3" component="h1" gutterBottom sx={style.title}>
            {label}
        </Typography>
    )
}