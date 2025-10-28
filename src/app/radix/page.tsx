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
import { Settings, LogOut, User, UserCircle, FileText } from 'lucide-react';

export default function RadixUIPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('profile');

  const tabs: TabItem[] = [
    {
      id: 'profile',
      title: 'Профиль',
      content: (
        <div className="p-4 bg-gray-800 rounded-md text-white">
          <h3 className="text-lg font-semibold mb-2">Информация профиля</h3>
          <p>Здесь отображается информация о пользователе.</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <UserCircle className="h-5 w-5 text-blue-400" />
              <span>Имя: Иван Иванов</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>Email: ivan@example.com</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'settings',
      title: 'Настройки',
      content: (
        <div className="p-4 bg-gray-800 rounded-md text-white">
          <h3 className="text-lg font-semibold mb-2">Настройки аккаунта</h3>
          <p>Здесь можно настроить параметры аккаунта.</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span>Уведомления</span>
              <Switch.Root
                className="h-6 w-11 rounded-full bg-gray-600 relative data-[state=checked]:bg-blue-600 outline-none cursor-pointer transition-colors"
                defaultChecked={true}
                onClick={() => console.log('Переключатель уведомлений нажат')}
              >
                <Switch.Thumb className="block h-5 w-5 bg-white rounded-full transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5 will-change-transform" />
              </Switch.Root>
            </div>
            <div className="flex items-center justify-between">
              <span>Темная тема</span>
              <Switch.Root
                className="h-6 w-11 rounded-full bg-gray-600 relative data-[state=checked]:bg-blue-600 outline-none cursor-pointer transition-colors"
                defaultChecked={true}
                onClick={() => console.log('Переключатель темной темы нажат')}
              >
                <Switch.Thumb className="block h-5 w-5 bg-white rounded-full transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5 will-change-transform" />
              </Switch.Root>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      title: 'Безопасность',
      content: (
        <div className="p-4 bg-gray-800 rounded-md text-white">
          <h3 className="text-lg font-semibold mb-2">Настройки безопасности</h3>
          <p>Здесь можно настроить параметры безопасности.</p>
          <div className="mt-4 space-y-3">
            <button className="w-full text-left p-3 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              <div className="font-medium">Изменить пароль</div>
              <div className="text-sm text-gray-400">Последнее изменение: 30 дней назад</div>
            </button>
            <button className="w-full text-left p-3 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
              <div className="font-medium">Двухфакторная аутентификация</div>
              <div className="text-sm text-gray-400">Статус: не включена</div>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'disabled',
      title: 'Отключенная вкладка',
      disabled: true,
      content: (
        <div className="p-4 bg-gray-800 rounded-md text-white">
          <h3 className="text-lg font-semibold mb-2">Эта вкладка отключена</h3>
          <p>Вы не можете увидеть этот контент, так как вкладка отключена.</p>
        </div>
      ),
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    console.log(`Активная вкладка: ${tabId}`);
  };

  return (
    <Box sx={{
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '20px',
      color: 'white'
    }}>
      <Typography variant="h4" gutterBottom>
        Radix UI & Tailwind
      </Typography>

      <Box display="flex" gap={2} mb={4}>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2">
              Открыть модальное окно
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Профиль пользователя</DialogTitle>
              <DialogDescription>
                Здесь вы можете изменить свои настройки профиля.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Имя
                </label>
                <input
                  id="name"
                  defaultValue="Иван Иванов"
                  className="col-span-3 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Email
                </label>
                <input
                  id="username"
                  defaultValue="ivan@example.com"
                  className="col-span-3 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                />
              </div>
            </div>
            <DialogFooter>
              <button
                type="submit"
                onClick={() => setIsDialogOpen(false)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
              >
                Сохранить изменения
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-600 bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2">
              <div className="flex items-center gap-2">
                Меню пользователя
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Профиль</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Настройки</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Выйти</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>

      <Box mb={4}>
        <Typography paragraph className="text-gray-300 mb-2">
          Активная вкладка: <span className="text-blue-400 font-semibold">{activeTab}</span>
        </Typography>
        <Tabs
          tabs={tabs}
          defaultTab="profile"
          onTabChange={handleTabChange}
        />
      </Box>

      <Box mt={3}>
        <Link href="/" passHref>
          <CustomButton variant="primary">
            Вернуться на главную
          </CustomButton>
        </Link>
      </Box>
    </Box>
  );
}