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
});
