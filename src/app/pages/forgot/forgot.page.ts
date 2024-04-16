import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email: string = '';
  submitAttempted = false;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onSend(form: any) {

    this.submitAttempted = true;
    
    if (form.valid) {
      this.userService.sendCode(this.email).subscribe((result:any)=>{

          if(result=='Error al enviar el correo'){
            alert('Ocurrio un error al enviar el correo, favor de intentarlo de nuevo.');
          }else if(result=='Usuario no encontrado'){
            alert('No se encontro el usuario');
          }else{
            const codigo=result.code;
            // Crear NavigationExtras para pasar el código a la página de verificación
            const navigationExtras: NavigationExtras = {
              state: {
                verificationCode: codigo,
                email: this.email
             }
            };

            this.router.navigate(['verification'], navigationExtras);
          }
      });   
    } 
  }
}
