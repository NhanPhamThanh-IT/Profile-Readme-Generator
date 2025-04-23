import { Box, Typography, Paper, useTheme } from '@mui/material';
import { styles } from '@styles/components/cards';

const FeatureCard = ({ icon: Icon, title, description, darkMode }) => {
    const theme = useTheme();
    const style = styles(theme, darkMode);

    return (
        <Paper variant="outlined" sx={style.paper}>
            <Box sx={style.iconBox}>
                <Icon size={30} color={style.iconColor} mb={0} />
            </Box>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ color: style.titleColor }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: style.descriptionColor, textAlign: 'center' }}>
                {description}
            </Typography>
        </Paper>
    );
};

export default FeatureCard;
