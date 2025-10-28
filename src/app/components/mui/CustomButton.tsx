import React from 'react';
import { Button, CircularProgress, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type CustomVariant = 'primary' | 'secondary' | 'danger';

type CustomButtonProps = {
  variant?: CustomVariant;
  loading?: boolean;
} & Omit<ButtonProps, 'variant' | 'color'>;

const StyledButton = styled(Button)<{ variantprop?: CustomVariant }>(
  ({ theme, variantprop }) => ({
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-1px)',
    },
    transition: 'all 0.2s ease-in-out',
    
    ...(variantprop === 'primary' && {
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    
    ...(variantprop === 'secondary' && {
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
    }),
    
    ...(variantprop === 'danger' && {
      backgroundColor: theme.palette.error.main,
      color: '#ffffff',
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
    }),

    '&.Mui-disabled': {
      backgroundColor: '#e2e8f0',
      color: '#a0aec0',
      boxShadow: 'none',
    },
  })
);

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  children,
  ...props
}) => {
  const color: ButtonProps['color'] = variant === 'danger' ? 'error' : variant;

  return (
    <StyledButton
      variant="contained"
      color={color}
      size={size}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : undefined}
      variantprop={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;