import { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Chip,
    Grid,
    Button,
    Autocomplete,
    Paper,
} from '@mui/material';
import { Plus, X } from 'lucide-react';

function SkillsForm({ data, onUpdate }) {
    const [newSkill, setNewSkill] = useState('');

    // Common programming languages, frameworks, and tools
    const commonSkills = [
        'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'Node.js',
        'Express', 'Next.js', 'HTML', 'CSS', 'Sass', 'Tailwind CSS',
        'Python', 'Django', 'Flask', 'Java', 'Spring Boot', 'C#', '.NET',
        'PHP', 'Laravel', 'Ruby', 'Ruby on Rails', 'Go', 'Rust', 'Swift',
        'Kotlin', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase',
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Git',
        'CI/CD', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Redis',
        'Redux', 'MobX', 'Webpack', 'Babel', 'ESLint', 'Jest', 'Mocha',
        'Cypress', 'Selenium', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator'
    ];

    const handleAddSkill = () => {
        if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onUpdate([...data, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleDeleteSkill = (skillToDelete) => {
        onUpdate(data.filter((skill) => skill !== skillToDelete));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddSkill();
        }
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" gutterBottom>
                Skills & Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                Add the technologies, programming languages, and tools you're proficient with.
                These will be displayed as a section in your README.
            </Typography>

            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Autocomplete
                        freeSolo
                        options={commonSkills.filter(skill => !data.includes(skill))}
                        inputValue={newSkill}
                        onInputChange={(event, newValue) => {
                            setNewSkill(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Add a skill"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                placeholder="JavaScript, React, Node.js, etc."
                            />
                        )}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={handleAddSkill}
                        disabled={!newSkill.trim()}
                        startIcon={<Plus size={18} />}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Your Skills {data.length > 0 && `(${data.length})`}
                </Typography>
                {data.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        No skills added yet. Add some skills to display in your README.
                    </Typography>
                ) : (
                    <Paper
                        variant="outlined"
                        sx={{
                            p: 2,
                            mt: 1,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1
                        }}
                    >
                        {data.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                onDelete={() => handleDeleteSkill(skill)}
                                deleteIcon={<X size={16} />}
                                color="primary"
                                variant="outlined"
                                sx={{ m: 0.5 }}
                            />
                        ))}
                    </Paper>
                )}
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Suggested Skills
                </Typography>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        mt: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1
                    }}
                >
                    {commonSkills
                        .filter(skill => !data.includes(skill))
                        .slice(0, 15)
                        .map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                onClick={() => onUpdate([...data, skill])}
                                clickable
                                color="default"
                                variant="outlined"
                                sx={{ m: 0.5 }}
                            />
                        ))}
                </Paper>
            </Box>
        </Box>
    );
}

export default SkillsForm;
