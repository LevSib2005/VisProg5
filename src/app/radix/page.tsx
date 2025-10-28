'use client';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import CustomButton from '@/app/components/mui/CustomButton';
import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/radix/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/radix/dropdown';
import { Tabs, TabItem } from '@/app/components/radix/tabs';

export default function RadixUIPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('profile');

  const tabs: TabItem[] = [
    {
      id: 'profile',
      title: 'Профиль',
      content: (
        <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <Typography variant="h6" className="text-gray-900 mb-3">
            Информация профиля
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Основная информация о пользователе системы
          </Typography>
          <Box className="space-y-3">
            <Box className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Box className="w-2 h-2 bg-blue-500 rounded-full" />
              <Typography className="text-gray-700">Имя: Иван Иванов</Typography>
            </Box>
            <Box className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Box className="w-2 h-2 bg-green-500 rounded-full" />
              <Typography className="text-gray-700">Email: ivan@example.com</Typography>
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      id: 'settings',
      title: 'Настройки',
      content: (
        <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <Typography variant="h6" className="text-gray-900 mb-3">
            Настройки аккаунта
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Управление параметрами системы
          </Typography>
          <Box className="space-y-4">
            <Box className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <Box>
                <Typography className="font-medium text-gray-900">Уведомления</Typography>
                <Typography className="text-sm text-gray-500">
                  Получать уведомления по email
                </Typography>
              </Box>
              <Switch.Root
                className="w-11 h-6 bg-gray-300 rounded-full relative data-[state=checked]:bg-blue-500 outline-none cursor-pointer transition-colors"
                defaultChecked={true}
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5 shadow-md" />
              </Switch.Root>
            </Box>
            <Box className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <Box>
                <Typography className="font-medium text-gray-900">Темная тема</Typography>
                <Typography className="text-sm text-gray-500">
                  Переключить на темный режим
                </Typography>
              </Box>
              <Switch.Root
                className="w-11 h-6 bg-gray-300 rounded-full relative data-[state=checked]:bg-blue-500 outline-none cursor-pointer transition-colors"
                defaultChecked={false}
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5 shadow-md" />
              </Switch.Root>
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      id: 'security',
      title: 'Безопасность',
      content: (
        <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <Typography variant="h6" className="text-gray-900 mb-3">
            Настройки безопасности
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Параметры защиты и конфиденциальности
          </Typography>
          <Box className="space-y-3">
            <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <Typography className="font-medium text-gray-900">Изменить пароль</Typography>
              <Typography className="text-sm text-gray-500 mt-1">
                Последнее изменение: 30 дней назад
              </Typography>
            </button>
            <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <Typography className="font-medium text-gray-900">Двухфакторная аутентификация</Typography>
              <Typography className="text-sm text-gray-500 mt-1">
                Статус: не включена
              </Typography>
            </button>
          </Box>
        </Box>
      ),
    },
    {
      id: 'disabled',
      title: 'Отключенная',
      disabled: true,
      content: (
        <Box className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <Typography variant="h6" className="text-gray-900 mb-3">
            Недоступно
          </Typography>
          <Typography className="text-gray-600">
            Эта вкладка временно отключена
          </Typography>
        </Box>
      ),
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Box className="min-h-screen bg-gray-50 p-6">
      <Box className="max-w-4xl mx-auto">
        <Typography variant="h4" className="text-gray-900 mb-8 font-bold">
          4. Radix UI и Tailwind CSS
        </Typography>

        <Box className="flex gap-3 mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium">
                Открыть диалог
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-gray-900">
                  Профиль пользователя
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-2">
                  Настройки профиля пользователя системы
                </DialogDescription>
              </DialogHeader>
              <Box className="space-y-4 py-4">
                <Box className="space-y-2">
                  <Typography className="block text-sm font-medium text-gray-700">
                    Имя
                  </Typography>
                  <input
                    id="name"
                    defaultValue="Иван Иванов"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </Box>
                <Box className="space-y-2">
                  <Typography className="block text-sm font-medium text-gray-700">
                    Email
                  </Typography>
                  <input
                    id="username"
                    defaultValue="ivan@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </Box>
              </Box>
              <DialogFooter>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Сохранить изменения
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm font-medium">
                Меню пользователя
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-gray-900 font-semibold">
                Мой аккаунт
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                Профиль
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-700 hover:bg-gray-100 cursor-pointer">
                Настройки
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 hover:bg-red-50 cursor-pointer">
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>

        <Box className="mb-8">
          <Typography className="text-gray-600 mb-4">
            Активная вкладка: <Box component="span" className="font-semibold text-blue-500">{activeTab}</Box>
          </Typography>
          <Tabs
            tabs={tabs}
            defaultTab="profile"
            onTabChange={handleTabChange}
          />
        </Box>

      </Box>
    </Box>
  );
}