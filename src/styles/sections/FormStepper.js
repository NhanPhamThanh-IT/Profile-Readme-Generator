const styles = {
    paper: (darkMode) => ({
        p: 3,
        pt: 4,
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: darkMode ? '#122c2e' : '#ffffff',
        elevation: darkMode ? 2 : 1,
        color: darkMode ? '#a7ffeb' : '#004d40',
    }),

    stepper: (darkMode) => ({
        '.MuiStepLabel-label': {
            fontSize: '0.8rem',
            fontWeight: 500,
            color: darkMode ? '#B2DFDB' : '#004D40',
        },
        '.MuiStepIcon-root': {
            fontSize: '1.75rem',
            color: darkMode ? '#4DB6AC' : '#80CBC4',
            '&.Mui-active': {
                color: darkMode ? '#1DE9B6' : '#26A69A',
            },
            '&.Mui-completed': {
                color: darkMode ? '#00BFA5' : '#004D40',
            },
        },
        '.MuiStep-root': {
            px: 2,
        },
    }),

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
    },

    activeStepButton: (darkMode) => ({
        bgcolor: darkMode ? "#1de9b6" : "#00695c",
        color: darkMode ? "black" : "white",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
            bgcolor: darkMode ? "#1de9b6" : "#00796b",
            boxShadow: "0 0 0 4px rgba(0, 150, 136, 0.2)",
        },
        '&.Mui-disabled': {
            bgcolor: (darkMode) =>
                !darkMode ? '#e0f2f1' : '#1c3b3d',
            color: (darkMode) =>
                !darkMode ? '#9e9e9e' : 'rgba(255, 255, 255, 0.5)',
        },
    }),
};

export default styles;
