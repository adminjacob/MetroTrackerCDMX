import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private navCtrl: NavController, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  reset() {
    this.router.navigate(['forgot']);
  }

  onLogin() {

    this.submitAttempted = true;

    // Verificar si el formulario es válido
    if (!this.loginForm.valid) {
      console.log('Formulario no válido, no se puede avanzar.');
      return; // Detener la ejecución si el formulario no es válido
    }

    this.userService.getPasswordByEmail(this.correo).subscribe((result:Result)=> {

      const id = result.id; // Obtiene el id del resultado
      const encryptedPassword = result.contrasenia; // Obtiene la contraseña encriptada del resultado
      const decryptedPassword = this.userService.decrypt(encryptedPassword);
      
      const encryptedId=this.userService.encrypt(id);

      // Guarda el id en las cookies
      localStorage.setItem('intro', 'true');
      localStorage.setItem('id',encryptedId);
  
      // Compara la contraseña obtenida con la proporcionada por el usuario
      if (this.contrasena == decryptedPassword) {
        // Si coinciden, navega a la página principal o a donde necesites
        this.navCtrl.navigateRoot(['']);
      } else {
        // Si no coinciden, muestra un mensaje de error
        alert('Usuario o contraseña incorrecta');
      }
    });
  }

  onSocial() {
    localStorage.setItem('intro', 'true');
    this.navCtrl.navigateRoot(['']);
  }

  onRegister() {
    this.router.navigate(['register']);
  }
}
