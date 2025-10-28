'use client';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "@/app/scriptfuncs/mui/theme";
import CustomButton from "@/app/components/mui/CustomButton";
import UserTable from '@/app/components/mui/UserTable';
import { Box, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          backgroundColor: '#f8fafc',
          minHeight: '100vh',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography 
              variant="h5" 
              color="text.primary" 
              gutterBottom
              sx={{ 
                fontWeight: 500,
                marginBottom: 2
              }}
            >
              1. MUI
            </Typography>

            <Box display="flex" gap={2} mb={4} flexWrap="wrap">
              <CustomButton variant="primary" size="large" onClick={() => alert('Primary')}>
                Normal
              </CustomButton>
              <CustomButton variant="secondary" size="medium" loading>
                Loading
              </CustomButton>
              <CustomButton variant="danger" size="small" disabled>
                Disabled
              </CustomButton>
            </Box>

            <Box 
              sx={{ 
                backgroundColor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 1
              }}
            >
              <UserTable />
            </Box>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}