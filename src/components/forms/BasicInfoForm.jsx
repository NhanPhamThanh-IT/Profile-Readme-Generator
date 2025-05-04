import React from 'react';
import { Box, TextField, Typography, Grid, InputAdornment } from '@mui/material';
import { basicInfoFormFields } from '@constants/Generator';
import getStyles from '@styles/components/forms/BasicInfoForm.js';
import { StepperTitle } from '@components/typography';

function BasicInfoForm({ data, onUpdate, darkMode }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    const styles = getStyles(darkMode);

    const renderTextField = (field) => {
        const {
            name = '',
            label = '',
            placeholder = '',
            icon = null,
            required = false,
            multiline = false,
            rows = 1,
            size = { xs: 12, sm: 12 },
        } = field;

        return (
            <Grid item xs={size.xs} sm={size.sm ?? size.xs} key={name}>
                <TextField
                    fullWidth
                    margin="normal"
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    value={data[name] || ''}
                    onChange={handleChange}
                    required={required}
                    multiline={multiline}
                    rows={rows}
                    variant="outlined"
                    sx={styles.input}
                    InputProps={{
                        startAdornment: icon && (
                            <InputAdornment
                                position="start"
                                sx={multiline ? { alignSelf: 'flex-start', mt: 1.5 } : {}}
                            >
                                {React.cloneElement(icon, {
                                    style: styles.icon
                                })}
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        );
    };

    return (
        <Box>
            <StepperTitle
                label="Basic Information"
                darkMode={darkMode}
            />
            <Typography variant="body2" paragraph sx={styles.container}>
                Let's start with some basic information about you to personalize your GitHub profile README.
            </Typography>

            <Grid container spacing={3}>
                {Array.isArray(basicInfoFormFields) && basicInfoFormFields.map(renderTextField)}
            </Grid>
        </Box>
    );
}

export default BasicInfoForm;
