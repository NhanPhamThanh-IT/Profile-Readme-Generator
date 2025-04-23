import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

export const theme = createTheme({
    palette: palette,
    typography: typography,
    components: components,
});

export default theme;
