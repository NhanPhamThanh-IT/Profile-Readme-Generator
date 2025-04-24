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
        sx: {
            mr: 1,
            border: '2px solid',
            backgroundColor: copied
                ? (darkMode ? '#1de9b6' : '#00897b')
                : (darkMode ? 'transparent' : 'transparent'),
            borderColor: copied
                ? (darkMode ? '#1de9b6' : '#00897b')
                : (darkMode ? '#1de9b6' : '#00897b'),
            color: copied
                ? (darkMode ? '#000' : '#fff')
                : (darkMode ? '#1de9b6' : '#00897b'),
            '&:hover': {
                border: '2px solid',
                backgroundColor: copied
                    ? (darkMode ? '#00bfa5' : '#00796b')
                    : (darkMode ? '#1de9b622' : '#00897b22'),
                borderColor: copied
                    ? (darkMode ? '#00bfa5' : '#00796b')
                    : (darkMode ? '#1de9b6' : '#00897b'),
            },
        },
    },
    downloadButton: {
        sx: {
            border: '2px solid',
            backgroundColor: 'transparent',
            borderColor: darkMode ? '#1de9b6' : '#00897b',
            color: darkMode ? '#1de9b6' : '#00897b',
            '&:hover': {
                border: '2px solid',
                backgroundColor: darkMode ? '#1de9b622' : '#00897b22',
                borderColor: darkMode ? '#1de9b6' : '#00796b',
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
