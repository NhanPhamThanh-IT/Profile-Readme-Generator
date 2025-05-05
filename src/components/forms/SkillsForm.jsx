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
import {
    Plus,
    X,
    Search
} from 'lucide-react';
import {
    commonSkills
} from '@constants/Generator';
import {
    sectionData
} from '@constants/Generator/skillsFormSectionContent.js';
import {
    styles
} from '@styles/components/forms/index.js';
import {
    StepperTitle,
    StepperSubtitle
} from '@components/typography';
import {
    EmptyPaper
} from '@components/papers';

/**
 * SkillsForm Component
 *
 * A form section component allowing users to input, add, remove, and view their skills.
 * It provides an Autocomplete input for adding new skills (either custom or from suggestions)
 * and displays the current list of skills as deletable Chips. It also suggests common skills
 * that haven't been added yet.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string[]} props.data - An array of strings representing the user's current skills.
 * @param {(updatedSkills: string[]) => void} props.onUpdate - Callback function invoked when the skills list changes (add/delete). It receives the new complete array of skills.
 * @param {boolean} props.darkMode - Flag to indicate if dark mode styling should be applied.
 * @returns {JSX.Element} The rendered SkillsForm component.
 */
function SkillsForm({ data, onUpdate, darkMode }) {
    /**
     * State for the new skill input field.
     * @type {[string, React.Dispatch<React.SetStateAction<string>>]}
     */
    const [newSkill, setNewSkill] = useState('');

    /**
     * Handles adding a new skill to the list.
     * Validates that the skill is not empty and not already in the list before updating.
     * Clears the input field after adding.
     * @function
     */
    const handleAddSkill = () => {
        const trimmedSkill = newSkill.trim();
        if (trimmedSkill && !data.includes(trimmedSkill)) {
            onUpdate([...data, trimmedSkill]);
            setNewSkill(''); // Clear input after adding
        }
    };

    /**
     * Handles deleting a skill from the list.
     * Filters the current skills array to remove the specified skill.
     * @function
     * @param {string} skillToDelete - The skill string to be removed from the list.
     */
    const handleDeleteSkill = (skillToDelete) => {
        onUpdate(data.filter((skill) => skill !== skillToDelete));
    };

    /**
     * Handles the key press event on the skill input field.
     * Specifically listens for the 'Enter' key to trigger adding the skill.
     * Prevents default form submission behavior.
     * @function
     * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event object.
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent potential form submission if nested
            handleAddSkill();
        }
    };

    // Filtered list of common skills that are not already added by the user.
    const suggestedSkills = commonSkills.filter(skill => !data.includes(skill));

    return (
        <Box>
            <StepperTitle
                label={sectionData.title}
                darkMode={darkMode}
            />
            <StepperSubtitle
                label={sectionData.description}
                darkMode={darkMode}
            />

            {/* Input and Add Button Grid */}
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} md>
                    <Box height="100%"> {/* Ensures Autocomplete takes full height */}
                        <Autocomplete
                            fullWidth
                            freeSolo // Allows custom input not present in options
                            options={suggestedSkills} // Suggest skills not already added
                            inputValue={newSkill}
                            onInputChange={(event, newValue) => setNewSkill(newValue || '')} // Handle null case from Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Add a skill"
                                    variant="outlined"
                                    onKeyPress={handleKeyPress} // Add skill on Enter press
                                    placeholder="e.g. JavaScript, React, Node.js..."
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment
                                                position="start"
                                                style={{ color: darkMode ? '#1de9b6' : '#004d40' }} // Dynamic color
                                            >
                                                <Search size={18} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={styles(darkMode).autocompleteInput}
                                    focused // Keep the label floated
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
                        disabled={!newSkill.trim()} // Disable if input is empty/whitespace
                        startIcon={<Plus size={18} />}
                        sx={styles(darkMode).addSkillButton}
                    >
                        Add Skill
                    </Button>
                </Grid>
            </Grid>

            {/* Display Added Skills Section */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom sx={styles(darkMode).contentTitle}>
                    {/* Display count of added skills */}
                    Your Skills {`(${data.length})`}
                </Typography>
                {data.length === 0 ? (
                    <EmptyPaper
                        message={sectionData.emptySkillsDescription}
                        darkMode={darkMode}
                    />
                ) : (
                    <Paper
                        variant="outlined"
                        sx={styles(darkMode).paper} // Common paper styling
                    >
                        {data.map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                onDelete={() => handleDeleteSkill(skill)} // Attach delete handler
                                deleteIcon={<X size={16} strokeWidth={5} sx={styles(darkMode).icon} color={'#F08080'} />}
                                variant="outlined"
                                sx={styles(darkMode).chip} // Common chip styling
                            />
                        ))}
                    </Paper>
                )}
            </Box>

            {/* Suggested Skills Section */}
            <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1" gutterBottom sx={styles(darkMode).contentTitle}>
                    Suggested Skills
                </Typography>
                <Paper
                    variant="outlined"
                    sx={styles(darkMode).paper} // Common paper styling
                >
                    {suggestedSkills
                        .slice(0, 15) // Show only top 15 suggestions
                        .map((skill) => (
                            <Chip
                                key={skill}
                                label={skill}
                                // Add suggested skill directly on click
                                onClick={() => onUpdate([...data, skill])}
                                clickable
                                variant="outlined"
                                sx={styles(darkMode).chip} // Common chip styling
                            />
                        ))}
                </Paper>
            </Box>
        </Box>
    );
}

export default SkillsForm;