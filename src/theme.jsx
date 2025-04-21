import { createTheme } from '@mui/material/styles';

const baseFont = '"Segoe UI", "Calibri", "Tahoma", "Verdana", sans-serif';

const theme = createTheme({
    typography: {
        fontFamily: baseFont,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    fontFamily: baseFont,
                },
                ':root': {
                    '--base-font-family': baseFont,
                },
            },
        },
    },
});

export default theme;
