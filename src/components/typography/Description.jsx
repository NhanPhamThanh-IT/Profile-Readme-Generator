import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { styles } from '@styles/components/typography/Description';

/**
 * Description is a simple text component used to display descriptive
 * or introductory content with styled typography. It adapts its style
 * based on the dark mode setting.
 *
 * This component renders a `<p>` element with a `Typography` wrapper
 * using the `h6` variant for consistent spacing and appearance.
 *
 * @component
 *
 * @param {Object} props - Props passed to the component.
 * @param {string} props.label - The text content to be displayed.
 * @param {boolean} props.darkMode - Indicates whether dark mode is enabled.
 *
 * @returns {JSX.Element} A styled paragraph of text using Material UI Typography.
 *
 * @example
 * <Description
 *   label="This section provides an overview of your current settings."
 *   darkMode={false}
 * />
 */
export const Description = ({ label, darkMode }) => {
    const style = useMemo(() => styles(darkMode), [darkMode]);

    return (
        <Typography variant="h6" component="p" sx={style.description}>
            {label}
        </Typography>
    );
};
