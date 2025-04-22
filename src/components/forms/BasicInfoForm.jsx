import {
    Box,
    TextField,
    Typography,
    Grid,
    InputAdornment,
} from '@mui/material';
import { User, Github, Briefcase, MapPin, Globe } from 'lucide-react';

function BasicInfoForm({ data, onUpdate }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" gutterBottom>
                Basic Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                Let's start with some basic information about you to personalize your GitHub profile README.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="John Doe"
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <User size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="GitHub Username"
                        name="githubUsername"
                        value={data.githubUsername}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="johndoe"
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Github size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Professional Title"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="Full Stack Developer | React Expert | Open Source Contributor"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Briefcase size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="About Me"
                        name="about"
                        value={data.about}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="I'm a passionate developer who loves to create innovative solutions..."
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="San Francisco, CA"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MapPin size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Personal Website"
                        name="website"
                        value={data.website}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="https://johndoe.dev"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Globe size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default BasicInfoForm;
