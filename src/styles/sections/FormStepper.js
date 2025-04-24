const styles = {
    paper: (darkMode) => ({
        p: 3,
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: darkMode ? '#122c2e' : '#ffffff',
        elevation: darkMode ? 2 : 1,
        color: darkMode ? '#a7ffeb' : '#004d40',
    }),

    stepper: {
        mb: 4
    },

    contentBox: {
        flexGrow: 1,
        mt: 2
    },

    divider: {
        my: 3
    },

    footerBox: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    previewButton: {
        mr: 2
    }
};

export default styles;
