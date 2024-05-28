import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  email: string = '';
  submitAttempted = false;

  constructor(private navCtrl: NavController,
    private router: Router,
    private userService: UserService,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  async onSend(form: any) {
    this.submitAttempted = true;
  
    if (form.valid) {
      this.userService.sendCode(this.email).subscribe(async (result: any) => {
        if (result === 'Error al enviar el correo') {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Ocurrió un error al enviar el correo, favor de intentarlo de nuevo.',
            buttons: ['OK']
          });
  
          await alert.present();
        } else if (result === 'Usuario no encontrado') {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'No se encontró el usuario.',
            buttons: ['OK']
          });
  
          await alert.present();
        } else {
          const codigo = result.code;
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
