import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://metrotrackerbackend.onrender.com/api/users';
  private key='671fff8b8b7f691c069d9ed9cf2bc3c48e68ee870e6c45d0914ddf06be83dcc3';

  constructor(private http: HttpClient) { }

  // Método para desencriptar datos
  decrypt(text: string): string {
    const textParts = text.split(':');
  
    const iv = CryptoJS.enc.Hex.parse(textParts[0]);
    const encryptedText = textParts[1];
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Hex.parse(encryptedText) // Cambiado a Hex.parse para ser coherente con el cifrado
    });
  
    const decrypted = CryptoJS.AES.decrypt(
      cipherParams,
      CryptoJS.enc.Hex.parse(this.key),
      { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );
  
    const result = decrypted.toString(CryptoJS.enc.Utf8);
  
    return result;
  }

  // Método para encriptar datos
  encrypt(data: string): string {
    const iv = CryptoJS.lib.WordArray.random(128 / 8); // Genera un IV aleatorio
    const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Hex.parse(this.key), {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  
    // Combina el IV (en hexadecimal) y el texto cifrado (también en hexadecimal) para su almacenamiento
    return iv.toString(CryptoJS.enc.Hex) + ':' + encrypted.ciphertext.toString(CryptoJS.enc.Hex);
  }


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

  // Actualizar la contraseña
  updatePassword(email: string, contrasenia: string) {
    return this.http.put(`${this.apiUrl}/update-password`, { email, contrasenia });
  }

  // Actualizar un usuario
  updateUser(id: string, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  //Mandar codigo de verificacion
  sendCode(correo:string){
    return this.http.post(`${this.apiUrl}/send-code`, {correo});
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