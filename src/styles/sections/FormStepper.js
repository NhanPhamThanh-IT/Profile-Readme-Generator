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
    },

    activeStepButton: (darkMode) => ({
        bgcolor: darkMode ? "#1de9b6" : "#00695c",
        color: darkMode ? "black" : "white",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
            bgcolor: darkMode ? "#1de9b6" : "#00796b",
            boxShadow: "0 0 0 4px rgba(0, 150, 136, 0.2)",
        }
    }),

};

export default styles;
