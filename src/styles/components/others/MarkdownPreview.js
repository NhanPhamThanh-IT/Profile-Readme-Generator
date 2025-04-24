const styles = (darkMode, copied) => ({
    paper: {
        elevation: darkMode ? 3 : 1,
        sx: {
            p: 3,
            height: '100%',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: darkMode ? '#122c2e' : '#ffffff',
            color: darkMode ? '#a7ffeb' : '#004d40',
        },
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
    },
    title: {
        fontWeight: 600,
        color: darkMode ? '#1de9b6' : '#00695c',
    },
    copyButton: {
        color: copied ? 'success' : undefined,
        sx: {
            mr: 1,
            borderColor: darkMode ? '#2f4f4f' : '#00897b',
            border: '2px solid',
            color: copied
                ? undefined
                : (darkMode ? '#1de9b6' : '#00897b'),
            '&:hover': {
                backgroundColor: darkMode ? '#1de9b622' : '#00897b22',
                borderColor: darkMode ? '#2f4f4f' : '#00897b',
                border: '2px solid',
            },
        },
    },
    downloadButton: {
        color: darkMode ? 'secondary' : 'primary',
        sx: {
            borderColor: darkMode ? '#2f4f4f' : '#00897b',
            color: darkMode ? '#1de9b6' : '#00897b',
            border: '2px solid',
            '&:hover': {
                backgroundColor: darkMode ? '#1de9b622' : '#00897b22',
                borderColor: darkMode ? '#2f4f4f' : '#00897b',
                border: '2px solid',
            },
        },
    },
    divider: {
        mb: 3,
        borderColor: darkMode ? '#2f4f4f' : '#b2dfdb',
    },
    markdownBox: {
        flexGrow: 1,
        overflow: 'auto',
        color: darkMode ? '#a7ffeb' : '#004d40',
    },
});

export default styles;
