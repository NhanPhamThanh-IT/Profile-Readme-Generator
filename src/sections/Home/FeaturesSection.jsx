import { TITLE, DESCRIPTION, features } from '@constants/FeaturesSection';
import { Box, Container, Grid, Typography, Paper, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Paper for Feature Card with Hover Effect
const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column', // Mặc định xếp dọc (cho xs)
  textAlign: 'center',    // Căn giữa text (cho xs)
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    boxShadow: theme.shadows[6],
    transform: 'translateY(-4px)',
  },
  // Thay đổi layout khi màn hình từ sm trở lên
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row', // Xếp ngang icon và text
    textAlign: 'left',    // Căn trái text
    alignItems: 'flex-start', // Căn các phần tử con lên trên cùng
  },
}));

// Styled Box for the Icon background
const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Khoảng cách dưới icon khi xếp dọc (xs)
  marginRight: 0,               // Không có khoảng cách phải khi xếp dọc (xs)
  display: 'inline-flex',       // Để căn giữa trên xs thông qua textAlign của cha
  padding: theme.spacing(1.5),
  borderRadius: '50%',
  backgroundColor: alpha(theme.palette.primary.main, 0.1), // Màu nền nhẹ
  color: theme.palette.primary.main,                     // Màu icon
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,                // Ngăn không cho bị co lại
  // Thay đổi margin khi màn hình từ sm trở lên
  [theme.breakpoints.up('sm')]: {
    marginBottom: 0,               // Bỏ khoảng cách dưới khi xếp ngang
    marginRight: theme.spacing(2.5), // Thêm khoảng cách phải khi xếp ngang
  },
}));


// --- Component Implementation ---

export const FeaturesSection = () => {
  const theme = useTheme(); // Access theme for consistent styling

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            fontWeight={700}
            gutterBottom
          >
            {TITLE}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ maxWidth: 'md', mx: 'auto' }}
            paragraph
          >
            {DESCRIPTION}
          </Typography>
        </Box>

        {/* Features Grid - Responsive: 1 cột trên xs, 2 cột từ sm trở lên */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {features.map((feature, index) => (
            // Cấu hình Grid Item: xs={12} (1 cột), sm={6} (2 cột)
            <Grid item xs={12} sm={6} key={index}>
              <FeatureCard elevation={0} variant="outlined">
                <IconWrapper>
                  {/* Render icon component */}
                  <feature.icon size={28} strokeWidth={1.5} />
                </IconWrapper>
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturesSection;