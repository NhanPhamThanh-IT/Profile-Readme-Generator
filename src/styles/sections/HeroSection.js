export const styles = ({ isMobile }) => ({
    container: {
        minHeight: isMobile ? 'auto' : '80vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb: isMobile ? 'auto' : 10,
    },
});
