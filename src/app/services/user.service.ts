import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:9000/api/users';

  constructor(private http: HttpClient) { }

  // Añadir un nuevo usuario
  addUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  // Obtener la contraseña de un usuario mediante su correo
  getPasswordByEmail(correo: string) {
    return this.http.get(`${this.apiUrl}/getPassword/${correo}`);
  }

  // Obtener todos los usuarios registrados
  getUsers() {
    return this.http.get(this.apiUrl);
  }

  // Eliminar un usuario
  deleteUser(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Obtener los detalles de un usuario
  getUser(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Actualizar un usuario
  updateUser(id: string, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  // Actualizar la foto de perfil de un usuario
  updateProfilePicture(id: string, file: File) {
    const formData = new FormData();
    formData.append('imagenPerfil', file);

    // Opcional: Añadir headers si tu API los requiere, como un token de autenticación
    // const headers = new HttpHeaders().set('Authorization', 'tu-token-aqui');

    return this.http.put(`${this.apiUrl}/${id}/profile-image`, formData, {
      // headers: headers, // Descomenta esta línea si necesitas enviar headers
    });
  }
  
}