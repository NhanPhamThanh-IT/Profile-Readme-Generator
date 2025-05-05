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

function StatsForm({ data, onUpdate, githubUsername, darkMode }) {
    const handleSwitchChange = (e) => {
        const { name, checked } = e.target;
        onUpdate({
            ...data,
            [name]: checked,
        });
    };

    const handleThemeChange = (e) => {
        onUpdate({
            ...data,
            theme: e.target.value,
        });
    };

    const themes = [
        'radical', 'merko', 'gruvbox', 'tokyonight', 'onedark',
        'cobalt', 'synthwave', 'highcontrast', 'dracula'
    ];

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
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showGitHubStats}
                                    onChange={handleSwitchChange}
                                    name="showGitHubStats"
                                    disabled={!githubUsername}
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


                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showTopLanguages}
                                    onChange={handleSwitchChange}
                                    name="showTopLanguages"
                                    disabled={!githubUsername || !data.showGitHubStats}
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

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showStreak}
                                    onChange={handleSwitchChange}
                                    name="showStreak"
                                    disabled={!githubUsername}
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

                    <Grid item xs={12}>
                        <FormControl
                            fullWidth
                            disabled={!githubUsername || !data.showGitHubStats}
                            sx={styles(darkMode).statsForm}
                        >
                            <InputLabel id="theme-select-label">Stats Theme</InputLabel>
                            <Select
                                labelId="theme-select-label"
                                id="theme-select"
                                value={data.theme}
                                label="Stats Theme"
                                onChange={handleThemeChange}
                            >
                                {themes.map((theme) => (
                                    <MenuItem
                                        key={theme}
                                        value={theme}
                                        sx={styles(darkMode).menuItem}
                                    >
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
