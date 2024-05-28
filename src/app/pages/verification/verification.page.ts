import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  verificationCode: string;
  email:string;

  otp: string = '';

  otpConfig = {
    length: 5,
    inputStyles: {
      'border-radius': '0px',
      'width': '40px',
      'height': '40px',
      'border': 'none',
      'border-bottom': '2px solid lightgray',
      'background-color': 'white'
    }
  };

  constructor(private navCtrl: NavController,
    private router: Router,
    public alertController: AlertController) { 
    const navigation = this.router.getCurrentNavigation();
    this.verificationCode = navigation?.extras.state?.verificationCode;
    this.email=navigation?.extras.state?.email;
  }


  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onOtpChange(otp: string): void {
    this.otp = otp;
  }

  async onContinue() {
    if (this.otp.length === 5 && this.otp == this.verificationCode) {
      // Crear NavigationExtras para pasar el correo a la página de confirmación de contraseña
      const navigationExtras: NavigationExtras = {
        state: {
          email: this.email
        }
      };
  
      this.router.navigate(['confirm-password'], navigationExtras);
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Código inválido, favor de intentar de nuevo.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

  
}
