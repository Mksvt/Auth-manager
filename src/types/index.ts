export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: 'done' | 'not done';
}

export interface Settings {
  id: string;
  title: string;
  footerText: string;
}