import {
    Box,
    TextField,
    Grid,
    InputAdornment,
    Paper,
} from '@mui/material';
import {
    StepperTitle,
    StepperSubtitle
} from '@components/typography';
import {
    socialPlatforms
} from '@constants/Generator/socialPlatforms';
import {
    styles
} from '@styles/components/forms/SocialLinksForm.js';

function SocialsForm({ data, onUpdate, darkMode }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    return (
        <Box>
            <StepperTitle
                label="Social Links"
                darkMode={darkMode}
            />
            <StepperSubtitle
                label="Add your social media profiles to help people connect with you. These will be displayed as badges in your README."
                darkMode={darkMode}
            />

            <Paper
                variant="outlined"
                sx={styles(darkMode).paper}
            >
                <Grid container spacing={3}>
                    {socialPlatforms.map((platform) => (
                        <Grid item xs={12} sm={6} key={platform.name}>
                            <TextField
                                fullWidth
                                label={platform.label}
                                name={platform.name}
                                value={data[platform.name]}
                                onChange={handleChange}
                                placeholder={platform.placeholder}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment
                                            position="start"
                                            style={{ color: darkMode ? '#1de9b6' : '#004d40' }}
                                        >
                                            {platform.icon}
                                        </InputAdornment>
                                    ),
                                }}
                                sx={styles(darkMode).autocompleteInput}
                                focused
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <StepperSubtitle
                    label="💡 Tip: Links will be displayed as badges in your README. Only filled links will be shown."
                    darkMode={darkMode}
                />
            </Box>
        </Box>
    );
}

export default SocialsForm;
