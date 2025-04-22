import { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    Paper,
    IconButton,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Chip,
    InputAdornment,
} from '@mui/material';
import { Plus, Edit2, Trash2, Github, ExternalLink, Code } from 'lucide-react';

function ProjectsForm({ data, onUpdate }) {
    const emptyProject = {
        name: '',
        description: '',
        link: '',
        technologies: [],
    };

    const [open, setOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(emptyProject);
    const [editIndex, setEditIndex] = useState(null);
    const [newTech, setNewTech] = useState('');

    const handleOpen = () => {
        setCurrentProject(emptyProject);
        setEditIndex(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (index) => {
        setCurrentProject(data[index]);
        setEditIndex(index);
        setOpen(true);
    };

    const handleDelete = (index) => {
        const newProjects = [...data];
        newProjects.splice(index, 1);
        onUpdate(newProjects);
    };

    const handleProjectChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject({
            ...currentProject,
            [name]: value,
        });
    };

    const handleAddTech = () => {
        if (newTech.trim() && !currentProject.technologies.includes(newTech.trim())) {
            setCurrentProject({
                ...currentProject,
                technologies: [...currentProject.technologies, newTech.trim()],
            });
            setNewTech('');
        }
    };

    const handleRemoveTech = (tech) => {
        setCurrentProject({
            ...currentProject,
            technologies: currentProject.technologies.filter(t => t !== tech),
        });
    };

    const handleSave = () => {
        if (!currentProject.name.trim()) return;

        const newProjects = [...data];
        if (editIndex !== null) {
            newProjects[editIndex] = currentProject;
        } else {
            newProjects.push(currentProject);
        }

        onUpdate(newProjects);
        setOpen(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTech();
        }
    };

    return (
        <Box>
            <Typography variant="h6" component="h2" gutterBottom>
                Projects
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
                Add your best projects to showcase your skills and experience. You can add links to GitHub repositories or live demos.
            </Typography>

            <Box sx={{ mb: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<Plus size={18} />}
                    onClick={handleOpen}
                >
                    Add Project
                </Button>
            </Box>

            {data.length === 0 ? (
                <Paper
                    variant="outlined"
                    sx={{
                        p: 4,
                        textAlign: 'center',
                        borderStyle: 'dashed',
                    }}
                >
                    <Typography variant="body1" color="text.secondary">
                        No projects added yet. Add some projects to display in your README.
                    </Typography>
                </Paper>
            ) : (
                <Grid container spacing={2}>
                    {data.map((project, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    p: 3,
                                    position: 'relative',
                                }}
                            >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                    <Typography variant="h6" component="h3">
                                        {project.name}
                                    </Typography>
                                    <Box>
                                        <IconButton size="small" onClick={() => handleEdit(index)}>
                                            <Edit2 size={18} />
                                        </IconButton>
                                        <IconButton size="small" onClick={() => handleDelete(index)}>
                                            <Trash2 size={18} />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <Typography variant="body2" paragraph>
                                    {project.description}
                                </Typography>

                                {project.link && (
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        startIcon={project.link.includes('github.com') ? <Github size={16} /> : <ExternalLink size={16} />}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {project.link.includes('github.com') ? 'View on GitHub' : 'View Live Demo'}
                                    </Button>
                                )}

                                {project.technologies.length > 0 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Divider sx={{ my: 1 }} />
                                        <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                                            Technologies:
                                        </Typography>
                                        {project.technologies.map(tech => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={{ mr: 1, mb: 1 }}
                                            />
                                        ))}
                                    </Box>
                                )}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Project Dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    {editIndex !== null ? 'Edit Project' : 'Add Project'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ mt: 0.5 }}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Project Name"
                                name="name"
                                value={currentProject.name}
                                onChange={handleProjectChange}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Code size={20} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={currentProject.description}
                                onChange={handleProjectChange}
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Project Link"
                                name="link"
                                value={currentProject.link}
                                onChange={handleProjectChange}
                                placeholder="https://github.com/username/project or https://project-demo.com"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ExternalLink size={20} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" gutterBottom>
                                Technologies Used
                            </Typography>
                            <Box sx={{ display: 'flex', mb: 2 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Add technology"
                                    value={newTech}
                                    onChange={(e) => setNewTech(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    size="small"
                                />
                                <Button
                                    variant="contained"
                                    onClick={handleAddTech}
                                    disabled={!newTech.trim()}
                                    sx={{ ml: 1 }}
                                >
                                    Add
                                </Button>
                            </Box>
                            {currentProject.technologies.length > 0 ? (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {currentProject.technologies.map(tech => (
                                        <Chip
                                            key={tech}
                                            label={tech}
                                            onDelete={() => handleRemoveTech(tech)}
                                            size="small"
                                        />
                                    ))}
                                </Box>
                            ) : (
                                <Typography variant="body2" color="text.secondary">
                                    No technologies added yet.
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        disabled={!currentProject.name.trim()}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ProjectsForm;
