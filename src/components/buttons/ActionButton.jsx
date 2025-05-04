import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { styles } from '@styles/components/buttons/ActionButton';

/**
 * ActionButton is a reusable button component that adapts its styles
 * based on the current MUI theme and dark mode setting.
 * 
 * It supports an optional icon, custom label, and click handler.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The text displayed on the button.
 * @param {React.ReactNode} [props.icon] - Optional icon element displayed to the left of the label.
 * @param {function} props.onClick - Callback function triggered when the button is clicked.
 * @param {boolean} props.darkMode - Indicates whether dark mode is active.
 *
 * @returns {JSX.Element} A themed Material UI button component.
 *
 * @example
 * <ActionButton
 *   label="Save"
 *   icon={<SaveIcon />}
 *   onClick={handleSave}
 *   darkMode={true}
 * />
 */
export const ActionButton = ({ label, icon, onClick, darkMode }) => {
    const theme = useTheme();

    const style = useMemo(() => styles(theme, darkMode), [theme, darkMode]);

    return (
        <Button
            variant="contained"
            onClick={onClick}
            startIcon={icon}
            sx={style.button}
        >
            {label}
        </Button>
    );
};
