import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';

interface Result {
  message: string;
  id: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]{8,}$/;
 
  newUser: User = {
    rol: 'REGISTRADO',
    nombreCompleto: '',
    correo: '',
    contrasenia: '',
    fechaDeNacimiento: '',
    genero: '',
    imagenPerfil: null
  };

  minDate: string = '1900-01-01';
  maxDate: string = new Date().toISOString().split('T')[0]; // Fecha de hoy en formato YYYY-MM-DD

  submitAttempted = false;

  viewPassword: boolean = false;

  @ViewChild('registerForm') registerForm: NgForm;

  constructor(private navCtrl: NavController, 
    private userService: UserService,
    public alertController: AlertController) {
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }
  
  onBack() {
    this.navCtrl.back();
  }

  async onRegister() {
    this.submitAttempted = true;
  
    // Verificar si el formulario es válido
    if (!this.registerForm.valid) {
      console.log('Formulario no válido, no se puede avanzar.');
      return; // Detener la ejecución si el formulario no es válido
    }
  
    this.userService.addUser(this.newUser).subscribe(async (result: any) => {
      const message = result.message;
      const id = result.id;
  
      if (message === "Usuario registrado correctamente" || message === "El correo electrónico ya está registrado. Por favor, use uno diferente.") {
        const alert = await this.alertController.create({
          header: 'Información',
          message: message,
          buttons: ['OK']
        });
  
        await alert.present();
        this.registerForm.resetForm();
        this.submitAttempted = false;
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Ocurrió un error al registrarse, favor de intentar de nuevo.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    });
  }
}
