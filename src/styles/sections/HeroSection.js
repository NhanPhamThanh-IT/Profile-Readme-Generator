export const styles = (theme, darkMode, isMobile) => ({
    container: {
        textAlign: 'center',
        marginBottom: 6,
        marginTop: isMobile ? 4 : 8,
    },
    title: {
        fontWeight: 700,
        marginBottom: 2,
        fontSize: { xs: '2rem', md: '3rem' },
        color: darkMode ? theme.palette.teal.teal300 : theme.palette.teal.teal700,
    },
    description: {
        marginBottom: 4,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: darkMode ? '#e0f2f1' : '#004d40',
    },
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
