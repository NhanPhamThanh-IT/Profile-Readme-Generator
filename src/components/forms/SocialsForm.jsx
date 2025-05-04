import {
    Box,
    TextField,
    Typography,
    Grid,
    InputAdornment,
    Paper,
} from '@mui/material';
import {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    Globe,
    FileText,
    Codepen
} from 'lucide-react';
import {
    StepperTitle
} from '@components/typography';

function SocialsForm({ data, onUpdate, darkMode }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

    const socialPlatforms = [
        {
            name: 'github',
            label: 'GitHub',
            icon: <Github size={20} />,
            placeholder: 'https://github.com/username'
        },
        {
            name: 'linkedin',
            label: 'LinkedIn',
            icon: <Linkedin size={20} />,
            placeholder: 'https://linkedin.com/in/username'
        },
        {
            name: 'twitter',
            label: 'Twitter',
            icon: <Twitter size={20} />,
            placeholder: 'https://twitter.com/username'
        },
        {
            name: 'instagram',
            label: 'Instagram',
            icon: <Instagram size={20} />,
            placeholder: 'https://instagram.com/username'
        },
        {
            name: 'youtube',
            label: 'YouTube',
            icon: <Youtube size={20} />,
            placeholder: 'https://youtube.com/c/username'
        },
        {
            name: 'dev',
            label: 'DEV.to',
            icon: <FileText size={20} />,
            placeholder: 'https://dev.to/username'
        },
        {
            name: 'medium',
            label: 'Medium',
            icon: <Globe size={20} />,
            placeholder: 'https://medium.com/@username'
        },
        {
            name: 'codepen',
            label: 'CodePen',
            icon: <Codepen size={20} />,
            placeholder: 'https://codepen.io/username'
        },
    ];

    return (
        <Box>
            <StepperTitle
                label="Social Links"
                darkMode={darkMode}
            />
            <Typography variant="body2" color="text.secondary" paragraph>
                Add your social media profiles to help people connect with you. These will be displayed as badges in your README.
            </Typography>

            <Paper variant="outlined" sx={{ p: 3 }}>
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
                                        <InputAdornment position="start">
                                            {platform.icon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            <Box sx={{ mt: 3 }}>
                <Typography variant="body2" color="text.secondary">
                    💡 Tip: Links will be displayed as badges in your README. Only filled links will be shown.
                </Typography>
            </Box>
        </Box>
    );
}

export default SocialsForm;
