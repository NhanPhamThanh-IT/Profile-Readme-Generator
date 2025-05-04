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
    InputAdornment,
} from '@mui/material';
import { Plus, X, Search } from 'lucide-react';
import { commonSkills } from '@constants/Generator';
import { sectionData } from '@constants/Generator/skillsFormSectionContent.js';
import { styles } from '@styles/components/forms/index.js';
import { StepperTitle } from '@components/typography';

function SkillsForm({ data, onUpdate, darkMode }) {
    const [newSkill, setNewSkill] = useState('');

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
            <StepperTitle label={sectionData.title} darkMode={darkMode} />
            <Typography variant="body2" paragraph sx={styles(darkMode).typographyColor}>
                {sectionData.description}
            </Typography>

            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md>
                    <Box height="100%">
                        <Autocomplete
                            fullWidth
                            freeSolo
                            options={commonSkills.filter(skill => !data.includes(skill))}
                            inputValue={newSkill}
                            onInputChange={(event, newValue) => setNewSkill(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Add a skill"
                                    variant="outlined"
                                    onKeyPress={handleKeyPress}
                                    placeholder="e.g. JavaScript, React, Node.js..."
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search size={18} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={styles(darkMode).autocompleteInput}
                                />
                            )}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md="auto" sx={{ display: 'flex' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddSkill}
                        disabled={!newSkill.trim()}
                        startIcon={<Plus size={18} />}
                        sx={styles(darkMode).addSkillButton}
                    >
                        Add Skill
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom sx={styles(darkMode).contentTitle}>
                    Your Skills {`(${data.length})`}
                </Typography>
                {data.length === 0 ? (
                    <Paper
                        variant="outlined"
                        sx={styles(darkMode).paperContent}
                    >
                        <Typography variant="body2" sx={styles(darkMode).contentDescription}>
                            {sectionData.emptySkillsDescription}
                        </Typography>
                    </Paper>
                ) : (
                    <Paper
                        variant="outlined"
                        sx={styles(darkMode).paper}
                    >
                        {data.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                onDelete={() => handleDeleteSkill(skill)}
                                deleteIcon={<X size={16} strokeWidth={5} sx={styles(darkMode).icon} color={'#F08080'} />}
                                variant="outlined"
                                sx={styles(darkMode).chip}
                            />
                        ))}
                    </Paper>
                )}
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom sx={styles(darkMode).contentTitle}>
                    Suggested Skills
                </Typography>
                <Paper
                    variant="outlined"
                    sx={styles(darkMode).paper}
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
                                variant="outlined"
                                sx={styles(darkMode).chip}
                            />
                        ))}
                </Paper>
            </Box>
        </Box>
    );
}

export default SkillsForm;
