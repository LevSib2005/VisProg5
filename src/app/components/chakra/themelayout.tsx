'use client';

import { ReactNode } from 'react';
import { ChakraProvider, Box, Container, Flex, Spacer } from '@chakra-ui/react';
import { ThemeToggle } from './themetoggler';
import theme from '@/app/scriptfuncs/chakra/theme';

interface ThemeLayoutProps {
  children: ReactNode;
  title?: string;
}

export const ThemeLayout = ({ children}: ThemeLayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" transition="background-color 0.2s ease">
        <Container maxW="container.xl" py={4}>
          <Flex align="center" mb={8}>
            <Spacer />
            <ThemeToggle />
          </Flex>
          {children}
        </Container>
      </Box>
    </ChakraProvider>
  );
};