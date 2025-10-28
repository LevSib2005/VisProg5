'use client';

import { Box } from '@mui/material';
import Link from 'next/link';
import CustomButton from '@/app/components/mui/CustomButton';
import ProjectForm, { ProjectFormValues } from '@/app/components/antd/form';
import Dashboard from '@/app/components/antd/dashboard';
import { ConfigProvider, App } from 'antd';
import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#1890ff',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#fafafa',
    colorBorder: '#d9d9d9',
    colorText: '#000000',
    colorTextPlaceholder: '#8c8c8c',
  },
  components: {
    Select: {
      optionSelectedBg: '#e6f7ff',
      optionActiveBg: '#f5f5f5',
    },
    Input: {
      colorBgContainer: '#ffffff',
    },
    InputNumber: {
      colorBgContainer: '#ffffff',
    },
    DatePicker: {
      colorBgContainer: '#ffffff',
    },
    Card: {
      colorBgContainer: '#ffffff',
    },
    Statistic: {
      colorText: '#000000',
    },
  },
};

export default function AntDesignPage() {
  const handleFormSubmit = (values: ProjectFormValues) => {
    console.log('Данные получены в page.tsx:', values);
  };

  return (
    <ConfigProvider theme={lightTheme}>
      <App>
        <Box sx={{
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
          padding: '20px',
          color: 'black',
        }}>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              component="h1"
              sx={{
                color: '#1890ff',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                mb: 1
              }}
            >
              2. AntDesign
            </Box>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #d9d9d9',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <Box
                component="h2"
                sx={{
                  color: '#000000',
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
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #d9d9d9',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <Dashboard />
            </Box>
          </Box>
        </Box>
      </App>
    </ConfigProvider>
  );
}