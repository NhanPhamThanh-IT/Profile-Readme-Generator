import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { desktopMenuStyles } from '@styles/components/layouts/Header';

const DesktopMenu = ({ pages, location, darkMode }) => {
    const theme = useTheme();
    const styles = desktopMenuStyles(darkMode, theme, location);

    return (
        <Box sx={styles.container}>
            {pages.map((page) => (
                <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={styles.button(page.path)}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    );
};

export default DesktopMenu;
