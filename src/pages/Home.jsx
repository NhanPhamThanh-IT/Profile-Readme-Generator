import {
    Container,
} from '@mui/material';

import { HeroSection, MarkdownSection, FeaturesSection, LastSection } from '@sections/Home';

export const Home = ({ darkMode }) => {

    return (
        <Container maxWidth="lg" sx={{ mt: 4, userSelect: 'none' }}>
            <HeroSection darkMode={darkMode} />

            <MarkdownSection darkMode={darkMode} />

            <FeaturesSection darkMode={darkMode} />

            <LastSection darkMode={darkMode} />
        </Container>
    );
}

export default Home;
