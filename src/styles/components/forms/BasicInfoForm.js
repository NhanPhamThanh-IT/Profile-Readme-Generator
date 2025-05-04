const colors = {
    light: {
        inputBackground: 'white',
        textColor: '#004d40',
        borderColor: '#004d40',
        iconColor: '#004d40',
        focusBorderColor: '#00796b',
        labelColor: '#004d40',
    },
    dark: {
        inputBackground: '#122c2e',
        textColor: '#e0f2f1',
        borderColor: '#1de9b6',
        iconColor: '#1de9b6',
        focusBorderColor: '#1de9b6',
        labelColor: '#1de9b6',
    }
};

export const styles = (darkMode) => {
    const currentColors = darkMode ? colors.dark : colors.light;

    return {
        container: {
            color: currentColors.textColor,
            opacity: 0.85,
        },
        input: {
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
                backgroundColor: currentColors.inputBackground,
                color: currentColors.textColor,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: currentColors.borderColor,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: currentColors.focusBorderColor,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: currentColors.focusBorderColor,
                },
            },
            '& .MuiInputLabel-root': {
                color: currentColors.textColor,
                fontWeight: 'medium',
                '&.Mui-focused': {
                    color: currentColors.focusBorderColor,
                }
            },
            '& .MuiInputBase-input': {
                color: currentColors.textColor,
            },
            '& .MuiInputBase-input::placeholder': {
                color: currentColors.textColor,
                opacity: 0.7,
            }
        },
        icon: {
            color: currentColors.iconColor,
        },
        text: {
            color: currentColors.textColor,
            opacity: 0.85,
        }
    };
};

export default styles;