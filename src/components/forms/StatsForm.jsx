import {
    Box,
    FormControlLabel,
    Switch,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Alert,
} from '@mui/material';
import {
    StepperTitle,
    StepperSubtitle
} from '@components/typography';
import {
    styles
} from '@styles/components/forms/StatsForm';
import {
    SwitchDescription
} from '@components/typography';

/**
 * @typedef {object} StatsFormData
 * @description An object holding the configuration options for displaying GitHub statistics.
 * @property {boolean} showGitHubStats - Whether to display the main GitHub stats card.
 * @property {boolean} showTopLanguages - Whether to display the top languages card. Requires showGitHubStats to be true.
 * @property {boolean} showStreak - Whether to display the GitHub streak stats card.
 * @property {string} theme - The selected theme name for the stats cards.
 */

/**
 * StatsForm Component
 *
 * A form section component for configuring options related to displaying dynamic GitHub statistics
 * on a user's profile README. Allows toggling stats cards (overall stats, top languages, streak)
 * and selecting a visual theme for these cards. Requires a GitHub username to be provided via props
 * to enable the options.
 *
 * @component
 * @param {object} props - The component props.
 * @param {StatsFormData} props.data - An object containing the current configuration state for the stats options.
 * @param {(updatedData: StatsFormData) => void} props.onUpdate - Callback function invoked when any configuration option changes. It receives the complete, updated data object.
 * @param {string | null | undefined} props.githubUsername - The user's GitHub username. Required to enable the stats options.
 * @param {boolean} props.darkMode - Flag to indicate if dark mode styling should be applied.
 * @returns {JSX.Element} The rendered StatsForm component.
 */
function StatsForm({ data, onUpdate, githubUsername, darkMode }) {

    /**
     * Handles changes for the Switch components (toggling stats options).
     * Updates the corresponding boolean flag in the parent component's state via `onUpdate`.
     * @function
     * @param {React.ChangeEvent<HTMLInputElement>} e - The switch change event object.
     */
    const handleSwitchChange = (e) => {
        const { name, checked } = e.target; // 'name' matches the key in StatsFormData
        onUpdate({
            ...data,
            [name]: checked,
        });
    };

    /**
     * Handles changes in the theme selection dropdown.
     * Updates the 'theme' property in the parent component's state via `onUpdate`.
     * @function
     */
    const handleThemeChange = (e) => {
        onUpdate({
            ...data,
            theme: e.target.value, // The value of the selected MenuItem
        });
    };

    /**
     * Available themes for the GitHub stats cards.
     * @type {string[]}
     */
    const themes = [
        'radical', 'merko', 'gruvbox', 'tokyonight', 'onedark',
        'cobalt', 'synthwave', 'highcontrast', 'dracula'
    ];

    // Determine if the main stats switch should be disabled
    const isStatsDisabled = !githubUsername;
    // Determine if dependent options (like theme, top languages) should be disabled
    const isDependentDisabled = isStatsDisabled || !data.showGitHubStats;

    return (
        <Box>
            <StepperTitle
                label="GitHub Stats & Badges"
                darkMode={darkMode}
            />
            <StepperSubtitle
                label="Include dynamic GitHub statistics and badges to make your README more engaging."
                darkMode={darkMode}
            />

            {/* Alert shown if GitHub username is missing */}
            {!githubUsername && (
                <Alert
                    severity="error"
                    sx={styles(darkMode).alert}
                >
                    Please enter your GitHub username in the Basic Info section to enable GitHub statistics.
                </Alert>
            )}

            <Paper variant="outlined" sx={styles(darkMode).paper}>
                <Grid container spacing={3}>
                    {/* GitHub Stats Switch */}
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showGitHubStats || false} // Ensure controlled component has boolean value
                                    onChange={handleSwitchChange}
                                    name="showGitHubStats"
                                    disabled={isStatsDisabled}
                                    sx={styles(darkMode).switch}
                                />
                            }
                            label="Show GitHub Stats"
                            sx={styles(darkMode).formControl}
                        />
                        <SwitchDescription
                            desc="Display your GitHub statistics (stars, commits, PRs, issues, contributions)"
                            darkMode={darkMode}
                        />
                    </Grid>

                    {/* Top Languages Switch */}
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showTopLanguages || false}
                                    onChange={handleSwitchChange}
                                    name="showTopLanguages"
                                    // Disabled if username missing OR main stats are off
                                    disabled={isDependentDisabled}
                                    sx={styles(darkMode).switch}
                                />
                            }
                            label="Show Top Languages"
                            sx={styles(darkMode).formControl}
                        />
                        <SwitchDescription
                            desc="Display your most used programming languages based on your repositories"
                            darkMode={darkMode}
                        />
                    </Grid>

                    {/* GitHub Streak Switch */}
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showStreak || false}
                                    onChange={handleSwitchChange}
                                    name="showStreak"
                                    disabled={isStatsDisabled} // Only depends on username presence
                                    sx={styles(darkMode).switch}
                                />
                            }
                            label="Show GitHub Streak"
                            sx={styles(darkMode).formControl}
                        />
                        <SwitchDescription
                            desc="Display your current GitHub streak, total contributions, and contribution streak"
                            darkMode={darkMode}
                        />
                    </Grid>

                    {/* Theme Selection Dropdown */}
                    <Grid item xs={12}>
                        <FormControl
                            fullWidth
                            // Disabled if username missing OR main stats are off
                            disabled={isDependentDisabled}
                            sx={styles(darkMode).statsForm}
                        >
                            <InputLabel id="theme-select-label">Stats Theme</InputLabel>
                            <Select
                                labelId="theme-select-label"
                                id="theme-select"
                                value={data.theme || ''} // Ensure controlled component has value
                                label="Stats Theme"
                                onChange={handleThemeChange}
                                sx={styles(darkMode).select}
                            >
                                {themes.map((theme) => (
                                    <MenuItem
                                        key={theme}
                                        value={theme}
                                        sx={styles(darkMode).menuItem}
                                    >
                                        {/* Capitalize first letter for display */}
                                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default StatsForm;