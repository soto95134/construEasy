import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.apiUrl; // Usar la URL desde el archivo de entorno

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`); // Endpoint para listar usuarios
  }

  // Método para agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user); // Endpoint para crear usuario
  }

  // Método para editar un usuario existente
  updateUser(userId: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${userId}`, user); // Endpoint para actualizar usuario
  }

  // Método para eliminar un usuario
  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`); // Endpoint para eliminar usuario
  }
}
