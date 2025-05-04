export const styles = (theme, darkMode) => ({
    button: {
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
    },
});