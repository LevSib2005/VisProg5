'use client';

import { Container, VStack, Heading, Button, Box } from '@chakra-ui/react';
import { useModal } from '@/app/hooks/useModal';
import { ModalWindow } from '@/app/components/chakra/modalwindow';
import Link from "next/link";
import { ThemeLayout } from '@/app/components/chakra/themelayout';

export default function ChakraPage() {
  const { isOpen, open, close } = useModal();

  return (
    <ThemeLayout>
      <Container
        maxW="container.md"
        centerContent
        py={10}
        minH="80vh"
        borderRadius="xl"
        boxShadow="xl"
        p={8}
      >
        <VStack spacing={8} width="100%">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            bgGradient="linear(to-r, primary.400, primary.600)"
            bgClip="text"
          >
            Chakra UI v2
          </Heading>

          <VStack spacing={6} width="100%">
            <Button
              colorScheme="primary"
              size="lg"
              onClick={open}
              width={{ base: "100%", md: "auto" }}
              px={8}
            >
              Добавить пользователя
            </Button>

            <Box textAlign="center" width="100%">
              <Link href="/" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  width={{ base: "100%", md: "auto" }}
                  px={8}
                >
                  Выйти на главную
                </Button>
              </Link>
            </Box>
          </VStack>
        </VStack>

        <ModalWindow isOpen={isOpen} onClose={close} />
      </Container>
    </ThemeLayout>
  );
}