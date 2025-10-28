'use client';

import { VStack, Heading, Button, Box } from '@chakra-ui/react';
import { useModal } from '@/app/hooks/useModal';
import { ModalWindow } from '@/app/components/chakra/modalwindow';
import Link from "next/link";
import { ThemeLayout } from '@/app/components/chakra/themelayout';

export default function ChakraPage() {
  const { isOpen, open, close } = useModal();

  return (
    <ThemeLayout>
      <VStack spacing={8} width="100%" justify="center" p={6}>
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
        >
          3. Chakra UI
        </Heading>

        <VStack spacing={4} width="100%" maxW="300px">
          <Button
            colorScheme="primary"
            size="lg"
            onClick={open}
            width="100%"
          >
            Добавить пользователя
          </Button>
        </VStack>
      </VStack>

      <ModalWindow isOpen={isOpen} onClose={close} />
    </ThemeLayout>
  );
}