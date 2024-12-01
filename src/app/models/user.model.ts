export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role_id: number;
  name: string;
  rut: string;
  phone_number: string;
  birth_date: string;
  address: string;
  is_active: boolean;
  avatar_url: string;
  role?: { id: number; name: string }; // Esto es para incluir el rol del usuario
}
