const color = {
    light: {
        borderColor: '#004d40',
        inputColor: '#004d40',
    },
    dark: {
        borderColor: '#1de9b6',
        inputColor: '#ffffff',
    }
};

export const styles = (darkMode) => {
    const currentColors = darkMode ? color.dark : color.light;

    const commonStyles = {
        borderColor: currentColors.borderColor,
        inputColor: currentColors.inputColor,
    };
    return {
        paper: {
            ...commonStyles,
            p: 3,
            display: 'flex',
            flexWrap: 'wrap',
            borderStyle: 'dashed',
            gap: 1,
            backgroundColor: 'transparent',
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
            '& label': {
                color: darkMode ? '#1de9b6' : '#004d40',
            },
            '& label.Mui-focused': {
                color: darkMode ? '#1de9b6' : '#004d40',
            },
        },
    }
};