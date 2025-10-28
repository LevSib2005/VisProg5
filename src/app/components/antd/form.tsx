'use client';

import { Form, Input, Button, DatePicker, Select, InputNumber } from 'antd';
import type { FormProps } from 'antd';
import { Dayjs } from 'dayjs';

export interface ProjectFormValues {
  name: string;
  description: string;
  priority: string;
  categories: string[];
  deadline: Date;
  budget: number;
}

type FieldType = Omit<ProjectFormValues, 'deadline'> & { deadline: Dayjs | null };

const priorityOptions = [
  { value: 'low', label: 'Низкий' },
  { value: 'medium', label: 'Средний' },
  { value: 'high', label: 'Высокий' },
];

const categoryOptions = [
  { value: 'development', label: 'Разработка' },
  { value: 'design', label: 'Дизайн' },
  { value: 'marketing', label: 'Маркетинг' },
  { value: 'research', label: 'Исследования' },
];

interface ProjectFormProps {
  onSubmit?: (values: ProjectFormValues) => void;
}

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const formattedValues: ProjectFormValues = {
      ...values,
      deadline: values.deadline ? values.deadline.toDate() : new Date(),
    };

    console.log('Данные формы, преобразованные для отправки:', formattedValues);

    if (onSubmit) {
      onSubmit(formattedValues);
    }

    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Ошибка валидации:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="create_project"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      style={{ maxWidth: 600 }}
    >
      <Form.Item<FieldType>
        label="Название проекта"
        name="name"
        rules={[
          { required: true, message: 'Пожалуйста, введите название проекта!' },
          { min: 3, message: 'Название должно содержать минимум 3 символа!' },
        ]}
      >
        <Input placeholder="Введите название проекта" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Описание"
        name="description"
        rules={[
          { required: true, message: 'Пожалуйста, введите описание!' },
          { min: 10, message: 'Описание должно содержать минимум 10 символов!' },
        ]}
      >
        <Input.TextArea rows={4} placeholder="Введите описание проекта" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Приоритет"
        name="priority"
        rules={[{ required: true, message: 'Выберите приоритет!' }]}
      >
        <Select placeholder="Выберите приоритет">
          {priorityOptions.map(option => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item<FieldType>
        label="Категории"
        name="categories"
        rules={[
          {
            required: true,
            message: 'Выберите хотя бы одну категорию!',
            type: 'array'
          },
          {
            validator: (_, value) => {
              if (!value || value.length === 0) {
                return Promise.reject(new Error('Выберите хотя бы одну категорию!'));
              }
              if (value.length > 3) {
                return Promise.reject(new Error('Можно выбрать не более 3 категорий!'));
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <Select mode="multiple" placeholder="Выберите категории">
          {categoryOptions.map(option => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item<FieldType>
        label="Дедлайн"
        name="deadline"
        rules={[
          { required: true, message: 'Пожалуйста, выберите дедлайн!' },
          {
            validator: (_, value) => {
              if (value && value.isBefore(new Date(), 'day')) {
                return Promise.reject(new Error('Дедлайн не может быть в прошлом!'));
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <DatePicker
          style={{ width: '100%' }}
          format="DD.MM.YYYY"
          placeholder="Выберите дату дедлайна"
        />
      </Form.Item>


      <Form.Item<FieldType>
        label="Бюджет"
        name="budget"
        rules={[
          { required: true, message: 'Пожалуйста, введите бюджет!' },
          { type: 'number', message: 'Бюджет должен быть числом!' },

          {
            validator: (_, value) => {
              if (!value || value <= 0) {
                return Promise.reject(new Error('Бюджет должен быть положительным числом!'));
              }
              if (value > 1000000) {
                return Promise.reject(new Error('Бюджет не может превышать 1,000,000!'));
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          placeholder="Введите бюджет"
          min={1}
          max={1000000}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          Создать проект
        </Button>
      </Form.Item>
    </Form>
  );
}