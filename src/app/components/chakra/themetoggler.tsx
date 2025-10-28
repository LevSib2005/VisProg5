'use client';

import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      label={colorMode === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
      hasArrow
    >
      <IconButton
        aria-label="Переключить тему"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="outline"
        size="lg"
        borderRadius="full"
        _hover={{
          transform: 'scale(1.1)',
        }}
        transition="all 0.2s ease"
      />
    </Tooltip>
  );
};