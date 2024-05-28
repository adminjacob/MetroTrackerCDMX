import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

interface Result {
  id: string;
  contrasenia: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  viewPassword: boolean = false;
  correo: any = '';
  contrasena: any = '';

  submitAttempted = false;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private navCtrl: NavController, 
    private router: Router, 
    private userService: UserService,
    public alertController: AlertController) {
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  reset() {
    this.router.navigate(['forgot']);
  }

  async onLogin() {
    this.submitAttempted = true;
  
    // Verificar si el formulario es válido
    if (!this.loginForm.valid) {
      console.log('Formulario no válido, no se puede avanzar.');
      return; // Detener la ejecución si el formulario no es válido
    }
  
    this.userService.getPasswordByEmail(this.correo).subscribe(async (result: any) => {
      const id = result.id; // Obtiene el id del resultado
      const encryptedPassword = result.contrasenia; // Obtiene la contraseña encriptada del resultado
      const decryptedPassword = this.userService.decrypt(encryptedPassword);
      const encryptedId = this.userService.encrypt(id);
  
      // Guarda el id en las cookies
      localStorage.setItem('intro', 'true');
      localStorage.setItem('logged', 'true');
      localStorage.setItem('id', encryptedId);
  
      // Compara la contraseña obtenida con la proporcionada por el usuario
      if (this.contrasena == decryptedPassword) {
        // Si coinciden, navega a la página principal
        if (this.correo == "administrador@gmail.com") {
          localStorage.setItem('admin', 'true');
          this.router.navigate(['/administrador-tabs']);
        } else {
          this.navCtrl.navigateRoot(['']);
        }
      } else {
        // Si no coinciden, mostrar un mensaje de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o contraseña incorrecta.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    });
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  ingresar() {
    this.navCtrl.navigateRoot(['']);
  }


}
