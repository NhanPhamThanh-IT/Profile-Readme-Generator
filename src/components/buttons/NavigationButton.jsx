import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { styles } from '@styles/components/buttons/NavigationButton';

/**
 * NavigationButton is a reusable button component designed to navigate 
 * to a specified route when clicked. It adapts its styling based on 
 * the MUI theme and dark mode setting.
 *
 * This button includes a right-facing arrow icon and is intended for 
 * use in navigational UI elements such as "Next" or "Continue" buttons.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The text displayed on the button.
 * @param {string} props.link - The path to navigate to when the button is clicked.
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled.
 *
 * @returns {JSX.Element} A themed navigation button that redirects the user to a specified route.
 *
 * @example
 * <NavigationButton
 *   label="Go to Dashboard"
 *   link="/dashboard"
 *   darkMode={true}
 * />
 */
export const NavigationButton = ({ label, link, darkMode }) => {
    const theme = useTheme();

    const navigate = useNavigate();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);

    return (
        <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            onClick={() => navigate(link)}
            sx={style.button}
        >
            {label}
        </Button>
    );
};

export default NavigationButton;
