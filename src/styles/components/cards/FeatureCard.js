import { alpha } from '@mui/material';

export const styles = (theme, darkMode) => {
    const tealColor = theme.palette.teal?.main || '#009688';

    const cardBorder = darkMode
        ? theme.palette.teal.teal400
        : alpha(theme.palette.divider, 0.1);

    const cardBg = darkMode ? 'transparent' : theme.palette.background.paper;
    const cardColor = theme.palette.text.primary;
    const iconBg = darkMode ? alpha(tealColor, 0.3) : alpha(tealColor, 0.15);
    const iconColor = theme.palette.teal.teal500;
    const titleColor = darkMode ? theme.palette.teal.teal400 : theme.palette.text.primary;
    const descriptionColor = darkMode
        ? theme.palette.teal.teal100
        : theme.palette.text.secondary;

    return {
        paper: {
            padding: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            border: `1px solid ${cardBorder}`,
            backgroundColor: cardBg,
            color: cardColor,
            backdropFilter: darkMode ? 'blur(6px)' : 'none',
            transition: theme.transitions.create(['box-shadow', 'transform'], {
                duration: theme.transitions.duration.standard,
            }),
            '&:hover': {
                boxShadow: 8,
                transform: 'translateY(-6px)',
                backgroundColor: darkMode
                    ? alpha(tealColor, 0.1)
                    : alpha(tealColor, 0.05),
            },
        },
        iconBox: {
            backgroundColor: iconBg,
            width: 60,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            mb: 1.5,
        },
        iconColor,
        titleColor,
        descriptionColor,
    };
};
