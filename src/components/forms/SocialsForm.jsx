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
    socialPlatforms // Assumed structure: Array of objects like { name: string, label: string, placeholder: string, icon: JSX.Element }
} from '@constants/Generator/socialPlatforms';
import {
    styles
} from '@styles/components/forms/SocialLinksForm.js';

/**
 * @typedef {object} SocialData
 * @description An object holding the user's input for various social media platforms.
 * Keys are the platform names (e.g., 'github', 'linkedin'), and values are the user-provided strings (usernames, URLs).
 * @property {string} [github] - GitHub username.
 * @property {string} [linkedin] - LinkedIn profile ID/URL segment.
 * @property {string} [twitter] - Twitter handle.
 * @property {string} [facebook] - Facebook username/profile ID.
 * @property {string} [instagram] - Instagram username.
 * @property {string} [youtube] - YouTube channel ID/handle.
 * @property {string} [discord] - Discord User ID or Invite Code.
 * @property {string} [website] - Personal website URL.
 * @property {string} [email] - Contact email address.
 * // Add other potential platform keys as needed based on socialPlatforms constant
 */

/**
 * SocialsForm Component
 *
 * A form section component designed to collect links or usernames for various social media platforms.
 * It dynamically renders input fields based on the `socialPlatforms` constant.
 * User input is managed through the `data` prop and the `onUpdate` callback.
 *
 * @component
 * @param {object} props - The component props.
 * @param {SocialData} props.data - An object containing the current values for each social platform input field. Keys correspond to platform names.
 * @param {(updatedData: SocialData) => void} props.onUpdate - Callback function invoked on every change to any input field. It receives the complete, updated data object.
 * @param {boolean} props.darkMode - Flag to indicate if dark mode styling should be applied.
 * @returns {JSX.Element} The rendered SocialsForm component.
 */
function SocialsForm({ data, onUpdate, darkMode }) {

    /**
     * Handles changes in any of the social link input fields.
     * Updates the parent component's state by calling `onUpdate` with the new data object.
     * @function
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event object.
     */
    const handleChange = (e) => {
        const { name, value } = e.target; // 'name' corresponds to the platform name (e.g., 'github')
        onUpdate({
            ...data, // Spread the existing data
            [name]: value, // Update the specific field that changed
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
                sx={styles(darkMode).paper} // Apply paper styling
            >
                <Grid container spacing={3}> {/* Grid container for layout */}
                    {/* Map over the predefined social platforms to create input fields */}
                    {socialPlatforms.map((platform) => (
                        <Grid item xs={12} sm={6} key={platform.name}> {/* Grid item for each platform */}
                            <TextField
                                fullWidth
                                label={platform.label} // Display name of the platform
                                name={platform.name} // Internal identifier for the platform, used in handleChange
                                value={data[platform.name] || ''} // Controlled input: value from props or empty string
                                onChange={handleChange} // Attach the change handler
                                placeholder={platform.placeholder} // Example text
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment
                                            position="start"
                                            // Apply dynamic color based on dark mode
                                            style={{ color: darkMode ? '#1de9b6' : '#004d40' }}
                                        >
                                            {platform.icon} {/* Display the platform's icon */}
                                        </InputAdornment>
                                    ),
                                }}
                                sx={styles(darkMode).autocompleteInput} // Apply specific input styling
                                focused // Keep the label floated (useful if there's a startAdornment or placeholder)
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            {/* Informational tip */}
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