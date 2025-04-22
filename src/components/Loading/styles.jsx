export const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 3,
        backgroundColor: '#f4f6f8',
        borderRadius: 2,
        gap: 2,
    },
    skeletonGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    skeletonElement: {
        width: 100,
        height: 100,
    },
    message: {
        marginTop: 2,
    },
};

export default styles;