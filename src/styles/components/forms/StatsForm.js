import { fontGrid } from "@mui/material/styles/cssUtils";

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
        alert: {
            mb: 3,
            bgcolor: darkMode ? '#00332c' : '#e0f2f1',
            color: darkMode ? '#64ffda' : '#004d40',
            border: darkMode ? '1px solid #64ffda' : 'none',
        },
        paper: {
            ...commonStyles,
            p: 3,
            display: 'flex',
            flexWrap: 'wrap',
            borderStyle: 'dashed',
            gap: 1,
            backgroundColor: 'transparent',
        },
        switch: {
            color: darkMode ? '#64ffda' : '#004d40',
            '&.Mui-checked': {
                color: darkMode ? '#64ffda' : '#00796b',
            },
            '& .MuiSwitch-track': {
                backgroundColor: darkMode ? '#004d40' : '#b2dfdb',
            },
        },
        formControl: {
            color: darkMode ? '#64ffda' : '#004d40',
            '&.Mui-checked': {
                color: darkMode ? '#64ffda' : '#00796b',
            },
            '& .MuiSwitch-track': {
                backgroundColor: darkMode ? '#004d40' : '#b2dfdb',
            },
            '& .MuiFormControlLabel-label': {
                fontWeight: 700,
            },
        },
        description: {
            ml: 6,
            color: darkMode ? '#80cbc4' : '#00796b',
        },
    }
};