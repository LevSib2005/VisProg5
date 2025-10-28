export type UserRole = 'admin' | 'user' | 'moderator' | 'guest';

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: boolean;
  createdAt: string;
  lastLogin?: string;
}

export type UserStatus = 'active' | 'inactive';