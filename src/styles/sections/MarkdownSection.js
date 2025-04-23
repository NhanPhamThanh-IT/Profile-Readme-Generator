export const styles = (darkMode) => ({
    container: {
        marginTop: '2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '850px',
        boxShadow: darkMode
            ? '0 20px 40px -10px rgba(0, 0, 0, 0.6)'
            : '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: darkMode
                ? '0 25px 50px -10px rgba(0, 0, 0, 0.7)'
                : '0 25px 50px -10px rgba(0, 0, 0, 0.15)',
        },
    },
    image: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px',
    },
});
