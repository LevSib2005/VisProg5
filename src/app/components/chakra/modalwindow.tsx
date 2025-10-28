import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';
import { useState, FormEvent, ChangeEvent } from 'react';

type UserRole = 'admin' | 'editor' | 'viewer';

interface UserFormData {
  name: string;
  email: string;
  role: UserRole;
  department: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = ({ isOpen, onClose }: ModalWindowProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    role: 'viewer',
    department: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: keyof UserFormData) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный формат email';
    }
    if (!formData.department.trim()) newErrors.department = 'Отдел обязателен';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Новый пользователь:', formData);
      alert(`Пользователь ${formData.name} успешно добавлен!`);
      onClose();
      setFormData({ name: '', email: '', role: 'viewer', department: '' });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Добавить пользователя
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Имя</FormLabel>
              <Input
                value={formData.name}
                onChange={handleInputChange('name')}
                placeholder="Введите имя"
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Введите email"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Роль</FormLabel>
              <Select value={formData.role} onChange={handleInputChange('role')}>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </Select>
            </FormControl>

            <FormControl isInvalid={!!errors.department}>
              <FormLabel>Отдел</FormLabel>
              <Input
                value={formData.department}
                onChange={handleInputChange('department')}
                placeholder="Введите отдел"
              />
              <FormErrorMessage>{errors.department}</FormErrorMessage>
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" mr={3} type="submit" onClick={handleSubmit}>
            Сохранить
          </Button>
          <Button onClick={onClose} variant="outline">
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};