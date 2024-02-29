import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

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

  constructor(private navCtrl: NavController, private userService: UserService) {
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }
  
  onBack() {
    this.navCtrl.back();
  }

  onRegister() {

    this.submitAttempted = true;

    // Verificar si el formulario es válido
    if (!this.registerForm.valid) {
      console.log('Formulario no válido, no se puede avanzar.');
      return; // Detener la ejecución si el formulario no es válido
    }

    this.userService.addUser(this.newUser).subscribe((result:Result) => {
      const message = result.message; 
      const id = result.id; 

      if(message==="Usuario registrado correctamente" || message==="El correo electrónico ya está registrado. Por favor, use uno diferente."){
        alert(message);
        this.registerForm.resetForm();
        this.submitAttempted = false;
      }
      else{
        alert('Ocurrio un error al registrarse, favor de intentar de nuevo');
      }
    });    
  }
}
