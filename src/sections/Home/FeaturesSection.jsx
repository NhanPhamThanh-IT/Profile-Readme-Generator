import { Box, Container, Grid } from '@mui/material';
import { TITLE, DESCRIPTION, features } from '@constants/Home/FeaturesSection';
import { Title, Description } from '@components/typography';
import FeatureCard from '@components/cards/FeatureCard';
import { styles } from '@styles/sections/FeaturesSection';

export const FeaturesSection = ({ darkMode }) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="lg">
        <Box sx={styles.headerBox}>
          <Title label={TITLE} darkMode={darkMode} />
          <Description label={DESCRIPTION} darkMode={darkMode} />
        </Box>

        <Grid container {...styles.gridContainer}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                darkMode={darkMode}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
