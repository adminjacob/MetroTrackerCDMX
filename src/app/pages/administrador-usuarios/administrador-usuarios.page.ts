import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-administrador-usuarios',
  templateUrl: './administrador-usuarios.page.html',
  styleUrls: ['./administrador-usuarios.page.scss'],
})

export class AdministradorUsuariosPage implements OnInit {
  usuarios:any = [
  ];
  
  usuariosFiltrados:any = [];
  searchTerm = '';
  imagenPerfil:ArrayBuffer;
  imagenPerfilUrlSafe: SafeUrl;

  constructor(private toastController: ToastController, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe((result:any)=>{
      this.usuarios = result;
      this.usuariosFiltrados = result;;
    });    
  }

  buscarUsuarios() {
    this.usuariosFiltrados = this.searchTerm ? this.usuarios.filter(u => 
      u.nombreCompleto.toLowerCase().includes(this.searchTerm.toLowerCase())) : this.usuarios;
  }

  async confirmarEliminacion(usuario) {
    const toast = await this.toastController.create({
      message: `¿Deseas eliminar a ${usuario.nombreCompleto}?`,
      duration: 3000,
      buttons: [
        {
          side: 'end',
          text: 'Eliminar',
          handler: () => {
            this.eliminarUsuario(usuario._id);
          }
        }
      ]
    });

    await toast.present();
  }

  eliminarUsuario(id: string) {

    this.userService.deleteUser(id).subscribe(result=>{
      if(result==="Usuario eliminado de forma correcta"){
        this.usuarios = this.usuarios.filter(usuario => usuario._id !== id);
        this.usuariosFiltrados = this.usuariosFiltrados.filter(usuario => usuario._id !== id);
      }else{
        alert("Ocurrio un error al eliminar al usuario");
      }
      
    });

  }
}