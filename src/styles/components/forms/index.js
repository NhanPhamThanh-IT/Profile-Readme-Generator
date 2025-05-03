const color = {
    light: {
        titleColor: '#004d40',
        typographyColor: '#004d40',
        contentDescription: '#004d40',
        borderColor: '#004d40',
        inputColor: '#004d40',
        fieldsetColor: '#004d40',
    },
    dark: {
        titleColor: '#1de9b6',
        typographyColor: '#e0f2f1',
        contentDescription: '#e0f2f1',
        borderColor: '#1de9b6',
        inputColor: '#ffffff',
        fieldsetColor: '#1de9b6',
    }
};

export const styles = (darkMode) => {
    const currentColors = darkMode ? color.dark : color.light;

    const commonStyles = {
        borderColor: currentColors.borderColor,
        inputColor: currentColors.inputColor,
    };

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
        paper: {
            ...commonStyles,
            border: '2px solid',
            p: 2,
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            backgroundColor: darkMode ? 'transparent' : '#fff',
        },
        paperContent: {
            ...commonStyles,
            border: '2px solid',
            p: 2,
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            backgroundColor: darkMode ? 'transparent' : '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        chip: {
            m: 0.5,
            border: '2px solid',
            color: currentColors.borderColor,
            borderColor: currentColors.borderColor,
        },
        icon: {
            color: currentColors.borderColor,
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
                bgcolor: darkMode ? '#1c3b3d' : '#e0f2f1',
                color: darkMode ? 'rgba(255, 255, 255, 0.5)' : '#9e9e9e',
            },
        },
        autocompleteInput: {
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: commonStyles.borderColor,
                    color: commonStyles.fieldsetColor,
                },
                '&:hover fieldset': {
                    borderColor: commonStyles.borderColor,
                    color: commonStyles.fieldsetColor,
                },
                '&.Mui-focused fieldset': {
                    borderColor: commonStyles.borderColor,
                    color: commonStyles.fieldsetColor,
                },
            },
            '& .MuiInputBase-input': {
                color: commonStyles.inputColor,
            },
            '& .MuiInputBase-input::placeholder': {
                color: commonStyles.inputColor,
            },
        },
    };
};
