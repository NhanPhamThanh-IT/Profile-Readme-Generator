export const styles = (theme, darkMode) => ({
    footer: {
        py: 3,
        mt: 'auto',
        bgcolor: darkMode ? theme.palette.grey[900] : theme.palette.grey[100],
        color: darkMode ? theme.palette.grey[300] : theme.palette.text.primary,
        fontWeight: 'bold',
        userSelect: 'none',
    },
    textSecondary: {
        color: darkMode ? theme.palette.teal.teal400 : theme.palette.teal.teal600,
        fontWeight: 'bold',
    },
    githubLink: {
        display: 'flex',
        alignItems: 'center',
        color: darkMode ? theme.palette.teal.teal300 : theme.palette.teal.teal600,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.teal.teal500,
        },
    },
});
