const color = {
    light: {
        titleColor: '#004d40',
        typographyColor: '#004d40',
        contentDescription: '#004d40',
    },
    dark: {
        titleColor: '#1de9b6',
        typographyColor: '#e0f2f1',
        contentDescription: '#e0f2f1',
    }
}

export const styles = (darkMode) => {
    const currentColors = darkMode ? color.dark : color.light;

    return {
        title: {
            color: currentColors.titleColor,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
        typographyColor: {
            color: currentColors.typographyColor,
        },
        contentDescription: {
            color: currentColors.contentDescription,
        },
        contentTitle: {
            color: currentColors.titleColor,
            fontWeight: 'bold',
        },
        paper:
        {
            border: '2px solid',
            p: 2,
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            backgroundColor: darkMode ? 'transparent' : '#fff',
            borderColor: darkMode ? '#1de9b6' : '#004d40',
        },
        paperContent: {
            border: '2px solid',
            p: 2,
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            backgroundColor: darkMode ? 'transparent' : '#fff',
            borderColor: darkMode ? '#1de9b6' : '#004d40',
            justifyContent: 'center',
            alignItems: 'center',
        },
        chip: {
            m: 0.5,
            border: '2px solid',
            borderColor: darkMode ? '#1de9b6' : '#004d40',
            color: darkMode ? '#1de9b6' : '#004d40',
        },
        icon: {
            color: darkMode ? '#1de9b6' : '#004d40',
        },
        addSkillButton: {
            paddingX: 3,
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
        }
    };
};