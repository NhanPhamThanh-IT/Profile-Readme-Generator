const colors = {
    light: {
        titleColor: '#004d40',
    },
    dark: {
        titleColor: '#1de9b6',
    }
};

export const styles = (darkMode) => {
    const currentColors = darkMode ? colors.dark : colors.light;

    return {
        title: {
            color: currentColors.titleColor,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
    };
};

export default styles;