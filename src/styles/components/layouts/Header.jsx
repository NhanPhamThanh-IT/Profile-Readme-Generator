export const boxStyles = {
    display: 'flex',
    alignItems: 'center',
};

export const getSwitchStyles = (iconLightColor, iconDarkColor) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: iconDarkColor,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: iconDarkColor,
    },
    '& .MuiSwitch-track': {
        backgroundColor: iconLightColor,
    },
});

export const desktopMenuStyles = (darkMode, theme, location) => ({
    container: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    },
    button: (path) => ({
        my: 2,
        mx: 1,
        color: darkMode ? theme.palette.teal.teal300 : theme.palette.teal.teal500,
        fontWeight: location.pathname === path ? 800 : 600,
        borderBottom: location.pathname === path
            ? `2px solid ${darkMode ? theme.palette.teal.teal300 : theme.palette.teal.teal500}`
            : 'none',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent',
            borderBottom: `2px solid ${darkMode ? theme.palette.teal.teal300 : theme.palette.teal.teal500}`,
        },
    }),
});

export const mobileMenuStyles = {
    container: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
    },
    menuProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
        transformOrigin: { vertical: 'top', horizontal: 'left' },
    },
};

