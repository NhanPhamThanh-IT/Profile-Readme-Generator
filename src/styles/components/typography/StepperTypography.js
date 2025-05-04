const colors = {
    light: {
        titleColor: '#004d40',
        subtitleColor: '#004d40',
    },
    dark: {
        titleColor: '#1de9b6',
        subtitleColor: '#a7ffeb',
    }
};

export const styles = (darkMode) => {
    const currentColors = darkMode ? colors.dark : colors.light;

    return {
        title: {
            color: currentColors.titleColor,
            fontWeight: 'bold',
            fontSize: '1.5rem',
        },
        subtitle: {
            color: currentColors.subtitleColor,
            opacity: 0.85,
        },
    };
};

export default styles;