import { useState } from 'react';
import {
    useMediaQuery,
    useTheme,
    Container,
    Grid,
    Box
} from '@mui/material';
import { Title } from '@components/typography';
import { MarkdownPreview, FormStepper } from '@sections/Generator';
import { useGeneratorLogic } from '@hooks';

const Generator = ({ darkMode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [previewVisible, setPreviewVisible] = useState(!isMobile);

    const {
        profileData,
        handleUpdateProfile,
        markdown,
        setMarkdown
    } = useGeneratorLogic();

    return (
        <Container maxWidth="xl" sx={{ mt: 6, mb: 12 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <Title label="Create Your GitHub Profile README" darkMode={darkMode} newVariant="h5" />
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={previewVisible ? 6 : 12}>
                    <FormStepper
                        darkMode={darkMode}
                        profileData={profileData}
                        handleUpdateProfile={handleUpdateProfile}
                        isMobile={isMobile}
                        previewVisible={previewVisible}
                        setPreviewVisible={setPreviewVisible}
                        setMarkdown={setMarkdown}
                    />
                </Grid>

                {previewVisible && (
                    <Grid item xs={12} md={6}>
                        <MarkdownPreview
                            darkMode={darkMode}
                            markdown={markdown}
                        />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default Generator;
