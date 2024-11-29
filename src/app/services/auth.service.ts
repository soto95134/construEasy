import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Usar la URL desde el archivo de entorno

  constructor(private http: HttpClient) {}

  // Método de login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password });
  }

  // Método para guardar el usuario en el localStorage
  saveUser(user: any): void {
    sessionStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en sessionStorage
  }

  // Método para obtener el usuario desde el localStorage
  getUser(): any | null {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const user = this.getUser();
    return user !== null; // Verifica si el usuario existe
  }

  // Método para cerrar sesión (eliminar el usuario del localStorage)
  logout(): void {
    sessionStorage.removeItem('user'); // Eliminar el usuario de sessionStorage
  }
}
