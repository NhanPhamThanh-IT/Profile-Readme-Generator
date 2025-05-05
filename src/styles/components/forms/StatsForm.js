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
        statsForm: {
            '& .MuiInputLabel-root': {
                color: darkMode ? '#1de9b6' : '#004d40',
            },
            '& .MuiOutlinedInput-root': {
                color: darkMode ? '#1de9b6' : '#004d40',
                borderColor: darkMode ? '#1de9b6' : '#004d40',
                '&.Mui-disabled': {
                    backgroundColor: darkMode ? '#004d40' : '#b2dfdb',
                    borderColor: darkMode ? '#1de9b6' : '#004d40',
                },
                '& fieldset': {
                    borderColor: darkMode ? '#1de9b6' : '#004d40',
                },
                '&:hover fieldset': {
                    borderColor: darkMode ? '#1de9b6' : '#004d40',
                },
                '&.Mui-focused fieldset': {
                    borderColor: darkMode ? '#1de9b6' : '#004d40',
                },
            },
            '& .MuiSelect-icon': {
                color: darkMode ? '#B2DFDB' : '#00796B',
            },
        },
        select: {
            color: darkMode ? '#E0F2F1' : '#004D40',
            bgcolor: darkMode ? '#122c2e' : 'white',
        },
        menuItem: {
            color: darkMode ? '#E0F2F1' : '#004D40',
            bgcolor: darkMode ? '#122c2e' : 'white',
            '&.Mui-selected': {
                backgroundColor: darkMode ? '#004D40' : '#B2DFDB',
            },
            '&.Mui-selected:hover': {
                backgroundColor: darkMode ? '#004D40' : '#B2DFDB',
                color: darkMode ? '#E0F2F1' : '#004D40',
            },
            '&:hover': {
                backgroundColor: darkMode ? '#004D40' : '#B2DFDB',
                color: darkMode ? '#E0F2F1' : '#004D40',
            },
        }
    }
};