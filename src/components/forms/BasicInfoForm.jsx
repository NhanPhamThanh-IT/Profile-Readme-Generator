import {
    Box,
    TextField,
    Typography,
    Grid,
    InputAdornment,
} from '@mui/material';
import { User, Github, Briefcase, MapPin, Globe } from 'lucide-react';

const fields = [
    {
        label: 'Name',
        name: 'name',
        placeholder: 'John Doe',
        icon: <User size={20} />,
        size: { xs: 12, sm: 6 },
        required: true,
    },
    {
        label: 'GitHub Username',
        name: 'githubUsername',
        placeholder: 'johndoe',
        icon: <Github size={20} />,
        size: { xs: 12, sm: 6 },
        required: true,
    },
    {
        label: 'Professional Title',
        name: 'title',
        placeholder: 'Full Stack Developer | React Expert | Open Source Contributor',
        icon: <Briefcase size={20} />,
        size: { xs: 12 },
    },
    {
        label: 'About Me',
        name: 'about',
        placeholder: "I'm a passionate developer who loves to create innovative solutions...",
        multiline: true,
        rows: 4,
        size: { xs: 12 },
    },
    {
        label: 'Location',
        name: 'location',
        placeholder: 'San Francisco, CA',
        icon: <MapPin size={20} />,
        size: { xs: 12, sm: 6 },
    },
    {
        label: 'Personal Website',
        name: 'website',
        placeholder: 'https://johndoe.dev',
        icon: <Globe size={20} />,
        size: { xs: 12, sm: 6 },
    },
];

function BasicInfoForm({ data, onUpdate }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({
            ...data,
            [name]: value,
        });
    };

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
                    InputProps={{
                        startAdornment: icon && (
                            <InputAdornment position="start">{icon}</InputAdornment>
                        ),
                    }}
                />
            </Grid>
        );
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" gutterBottom>
                Basic Information
            </Typography>
            <Typography variant="body2" paragraph>
                Let's start with some basic information about you to personalize your GitHub profile README.
            </Typography>

            <Grid container spacing={3}>
                {fields.map(renderTextField)}
            </Grid>
        </Box>
    );
}

export default BasicInfoForm;
