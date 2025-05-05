/**
 * BasicInfoForm component
 *
 * This component renders a form for collecting basic user information
 * as part of a GitHub profile README generator. It includes fields like
 * name, bio, and other customizable inputs with optional icons.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.data - The current state of form data
 * @param {Function} props.onUpdate - Callback function to update form state when input changes
 * @param {boolean} props.darkMode - Boolean flag indicating if dark mode is active
 * @returns {JSX.Element} The rendered BasicInfoForm component
 */

import React from 'react';
import { Box, TextField, Grid, InputAdornment } from '@mui/material';
import { basicInfoFormFields } from '@constants/Generator';
import getStyles from '@styles/components/forms/BasicInfoForm.js';
import {
    StepperTitle,
    StepperSubtitle
} from '@components/typography';

function BasicInfoForm({ data, onUpdate, darkMode }) {
    /**
     * Handles changes in input fields by updating the form state.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    const styles = getStyles(darkMode);

    /**
     * Renders a Material UI TextField based on field configuration.
     *
     * @param {Object} field - Field configuration object
     * @param {string} field.name - Field name (used as key in data)
     * @param {string} field.label - Label for the input
     * @param {string} field.placeholder - Placeholder text
     * @param {JSX.Element|null} field.icon - Optional icon displayed in the input
     * @param {boolean} field.required - Whether the field is required
     * @param {boolean} field.multiline - Whether the field supports multiple lines
     * @param {number} field.rows - Number of rows for multiline input
     * @param {{xs: number, sm: number}} field.size - Grid size for different breakpoints
     * @returns {JSX.Element} A configured TextField wrapped in a Grid item
     */
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
            <StepperSubtitle
                label="Let's start with some basic information about you to personalize your GitHub profile README."
                darkMode={darkMode}
            />
            <Grid container spacing={3}>
                {Array.isArray(basicInfoFormFields) && basicInfoFormFields.map(renderTextField)}
            </Grid>
        </Box>
    );
}

export default BasicInfoForm;
