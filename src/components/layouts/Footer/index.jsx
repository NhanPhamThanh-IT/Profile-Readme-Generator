import { Box, Container, Typography, Link, Stack, useTheme } from '@mui/material';
import { Github, Heart } from 'lucide-react';
import { styles } from '@styles/components/layouts';
import { AUTHOR, BRANCH, GITHUB_URL, GITHUB_LABEL } from '@constants/layouts';

export const Footer = ({ darkMode }) => {
    const theme = useTheme();
    const style = styles(theme, darkMode);

    return (
        <Box component="footer" sx={style.footer}>
            <Container maxWidth="xl">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body2" sx={style.textSecondary}>
                        {BRANCH}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ ...style.textSecondary, mr: 1 }}>
                            Made with
                        </Typography>
                        <Heart size={16} color={theme.palette.error.main} />
                        <Typography variant="body2" sx={{ ...style.textSecondary, mx: 1 }}>
                            {AUTHOR}
                        </Typography>
                    </Box>

                    <Link
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={style.githubLink}
                    >
                        <Github size={18} />
                        <Typography variant="body2" sx={{ ml: 1 }} fontWeight={'bold'}>
                            {GITHUB_LABEL}
                        </Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
