'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import CustomButton from '@/app/components/mui/CustomButton';
import ProjectForm, { ProjectFormValues } from '@/app/components/antd/form';
import Dashboard from '@/app/components/antd/dashboard';
import { ConfigProvider, App } from 'antd';
import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#1890ff',
    colorBgContainer: '#1e1e1e',
    colorBgElevated: '#2d2d2d',
    colorBorder: '#434343',
    colorText: '#ffffff',
    colorTextPlaceholder: '#8c8c8c',
  },
  components: {
    Select: {
      optionSelectedBg: '#1890ff33',
      optionActiveBg: '#1890ff1a',
    },
    Input: {
      colorBgContainer: '#2d2d2d',
    },
    InputNumber: {
      colorBgContainer: '#2d2d2d',
    },
    DatePicker: {
      colorBgContainer: '#2d2d2d',
    },
    Card: {
      colorBgContainer: '#1e1e1e',
    },
    Statistic: {
      colorText: '#ffffff',
    },
  },
};

export default function AntDesignPage() {
  const handleFormSubmit = (values: ProjectFormValues) => {
    console.log('Данные получены в page.tsx:', values);
  };

  return (
    <ConfigProvider theme={darkTheme}>
      <App>
        <Box sx={{
          backgroundColor: '#121212',
          minHeight: '100vh',
          padding: '20px',
          color: 'white',
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
        }}>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              component="h1"
              sx={{
                background: 'linear-gradient(45deg, #1890ff, #722ed1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              Ant Design
            </Box>
            <Box
              component="p"
              sx={{
                color: '#8c8c8c',
                fontSize: '1.1rem'
              }}
            >
              Форма создания проекта и статистический дашборд
            </Box>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 3,
            mb: 4
          }}>

            <Box>
              <Box
                sx={{
                  padding: '24px',
                  backgroundColor: '#1e1e1e',
                  borderRadius: '12px',
                  border: '1px solid #434343',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  height: 'fit-content'
                }}
              >
                <Box
                  component="h2"
                  sx={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  Создание проекта
                </Box>
                <ProjectForm onSubmit={handleFormSubmit} />
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  backgroundColor: 'transparent',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <Dashboard />
              </Box>
            </Box>
          </Box>

          <Box mt={5} sx={{ textAlign: 'center' }}>
            <Link href="/" passHref>
              <CustomButton variant="primary" size="large">
                Вернуться на главную
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </App>
    </ConfigProvider>
  );
}