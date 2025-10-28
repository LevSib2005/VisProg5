import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { CustomTheme } from '@/app/types/theme';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  primary: {
    50: '#e6f6ff',
    100: '#bae3ff',
    200: '#7cc4fa',
    300: '#47a3f3',
    400: '#2186eb',
    500: '#0967d2',
    600: '#0552b5',
    700: '#03449e',
    800: '#01337d',
    900: '#002159',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        transition: 'background-color 0.2s ease',
      },
    }),
  },
  components: {
    Container: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        boxShadow: props.colorMode === 'dark' ? 'dark-lg' : 'sm',
        borderRadius: 'lg',
        transition: 'all 0.2s ease',
      }),
    },
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        },
        header: {
          bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
          color: props.colorMode === 'dark' ? 'white' : 'gray.900',
          borderBottom: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.200',
        },
        body: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        },
        footer: {
          bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
          color: props.colorMode === 'dark' ? 'white' : 'gray.900',
          borderTop: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.200',
        },
        closeButton: {
          color: props.colorMode === 'dark' ? 'gray.400' : 'gray.600',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
            color: props.colorMode === 'dark' ? 'white' : 'gray.900',
          },
        },
      }),
    },
    Input: {
      variants: {
        outline: (props: any) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
            borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
            color: props.colorMode === 'dark' ? 'white' : 'gray.900',
            _placeholder: {
              color: props.colorMode === 'dark' ? 'gray.400' : 'gray.500',
            },
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'gray.500' : 'gray.400',
            },
            _focus: {
              borderColor: 'primary.500',
              boxShadow: `0 0 0 1px primary.500`,
            },
          },
        }),
      },
    },
    Select: {
      variants: {
        outline: (props: any) => ({
          field: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
            borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
            color: props.colorMode === 'dark' ? 'white' : 'gray.900',
            _hover: {
              borderColor: props.colorMode === 'dark' ? 'gray.500' : 'gray.400',
            },
            _focus: {
              borderColor: 'primary.500',
              boxShadow: `0 0 0 1px primary.500`,
            },
          },
        }),
      },
    },
    Button: {
      variants: {
        outline: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderColor: props.colorMode === 'dark' ? 'gray.500' : 'gray.300',
          color: props.colorMode === 'dark' ? 'gray.300' : 'gray.700',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.50',
            borderColor: props.colorMode === 'dark' ? 'gray.400' : 'gray.400',
            color: props.colorMode === 'dark' ? 'white' : 'gray.900',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.100',
          },
        }),
      },
    },
    Heading: {
      baseStyle: (props: any) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
      }),
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
}) as CustomTheme;

export default theme;