import { Box, Typography, Paper, useTheme } from '@mui/material';
import { styles } from '@styles/components/cards';

/**
 * A card component displaying a feature with an icon, title, and description.
 * 
 * @component
 * @example
 * const icon = SomeIcon; // Replace with an actual icon component
 * const title = "Feature Title";
 * const description = "This is a short description of the feature.";
 * const darkMode = true; // Set to false for light mode
 * 
 * return (
 *   <FeatureCard
 *     icon={icon}
 *     title={title}
 *     description={description}
 *     darkMode={darkMode}
 *   />
 * );
 * 
 * @param {Object} props - The properties for the component.
 * @param {React.ElementType} props.icon - A React component for the icon to be displayed.
 * @param {string} props.title - The title of the feature card.
 * @param {string} props.description - The description of the feature.
 * @param {boolean} props.darkMode - Determines if dark mode styles should be applied.
 * 
 * @returns {React.Element} The rendered FeatureCard component.
 */
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
