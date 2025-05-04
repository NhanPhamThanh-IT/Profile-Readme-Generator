import {
    Box,
    Typography,
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
    StepperTitle
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
            <Typography variant="body2" color="text.secondary" paragraph>
                Include dynamic GitHub statistics and badges to make your README more engaging.
            </Typography>

            {!githubUsername && (
                <Alert severity="info" sx={{ mb: 3 }}>
                    Please enter your GitHub username in the Basic Info section to enable GitHub statistics.
                </Alert>
            )}

            <Paper variant="outlined" sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showGitHubStats}
                                    onChange={handleSwitchChange}
                                    name="showGitHubStats"
                                    disabled={!githubUsername}
                                />
                            }
                            label="Show GitHub Stats"
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                            Display your GitHub statistics (stars, commits, PRs, issues, contributions)
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showTopLanguages}
                                    onChange={handleSwitchChange}
                                    name="showTopLanguages"
                                    disabled={!githubUsername || !data.showGitHubStats}
                                />
                            }
                            label="Show Top Languages"
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                            Display your most used programming languages based on your repositories
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={data.showStreak}
                                    onChange={handleSwitchChange}
                                    name="showStreak"
                                    disabled={!githubUsername}
                                />
                            }
                            label="Show GitHub Streak"
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                            Display your current GitHub streak, total contributions, and contribution streak
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth disabled={!githubUsername || !data.showGitHubStats}>
                            <InputLabel id="theme-select-label">Stats Theme</InputLabel>
                            <Select
                                labelId="theme-select-label"
                                id="theme-select"
                                value={data.theme}
                                label="Stats Theme"
                                onChange={handleThemeChange}
                            >
                                {themes.map((theme) => (
                                    <MenuItem key={theme} value={theme}>
                                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Preview
                </Typography>
                <Paper variant="outlined" sx={{ p: 3, overflow: 'auto' }}>
                    {githubUsername ? (
                        <Box>
                            {data.showGitHubStats && (
                                <Box sx={{ mb: 2 }}>
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${data.theme}`}
                                        alt="GitHub Stats"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Box>
                            )}

                            {data.showTopLanguages && data.showGitHubStats && (
                                <Box sx={{ mb: 2 }}>
                                    <img
                                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${data.theme}`}
                                        alt="Top Languages"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Box>
                            )}

                            {data.showStreak && (
                                <Box>
                                    <img
                                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${data.theme}`}
                                        alt="GitHub Streak"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Box>
                            )}
                        </Box>
                    ) : (
                        <Typography variant="body2" color="text.secondary" align="center">
                            Enter your GitHub username to preview stats.
                        </Typography>
                    )}
                </Paper>
            </Box>
        </Box>
    );
}

export default StatsForm;
