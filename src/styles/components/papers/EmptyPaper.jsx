const color = {
    light: {
        borderColor: '#004d40',
        inputColor: '#004d40',
        messageColor: '#004d40',
    },
    dark: {
        borderColor: '#1de9b6',
        inputColor: '#ffffff',
        messageColor: '#a7ffeb',
    }
};

export const getStyles = (darkMode) => {
    const currentColors = darkMode ? color.dark : color.light;

    const commonStyles = {
        borderColor: currentColors.borderColor,
        inputColor: currentColors.inputColor,
    };

    return {
        paperContainer: {
            p: 4,
            textAlign: 'center',
            borderStyle: 'dashed',
            ...commonStyles,
            mt: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            backgroundColor: darkMode ? 'transparent' : '#fff',
        },
        message: {
            color: currentColors.messageColor,
            opacity: 0.85,
            fontWeight: 400,
            fontSize: '0.875rem',
        },
    };
};
