export const styles = (theme, darkMode) => ({
    button: {
        paddingX: 4,
        paddingY: 1.5,
        borderRadius: '8px',
        backgroundColor: darkMode ? theme.palette.teal.teal500 : theme.palette.teal.teal600,
        color: '#fff',
        boxShadow: darkMode
            ? '0 4px 14px 0 rgba(20, 184, 166, 0.4)'
            : '0 4px 14px 0 rgba(13, 148, 136, 0.4)',
        transition: 'all 0.2s',
        '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: darkMode ? theme.palette.teal.teal600 : theme.palette.teal.teal700,
            boxShadow: darkMode
                ? '0 6px 20px 0 rgba(20, 184, 166, 0.6)'
                : '0 6px 20px 0 rgba(13, 148, 136, 0.6)',
        },
    },
});