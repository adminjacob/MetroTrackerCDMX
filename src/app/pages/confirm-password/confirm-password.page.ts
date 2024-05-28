import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { PasswordChangedPage } from '../password-changed/password-changed.page';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.page.html',
  styleUrls: ['./confirm-password.page.scss'],
})
export class ConfirmPasswordPage implements OnInit {

  email: string = '';

  newPassword: string;
  confirmPassword: string;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]{8,}$/;
  viewPassword = false;
  submitAttempted = false;
  passwordsDontMatch: boolean = false;

  constructor(private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
    private userService: UserService,
    public alertController: AlertController) {
    const navigation = this.router.getCurrentNavigation();
    this.email=navigation?.extras.state?.email;
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  onBack() {
    this.navCtrl.back();
  }

  async onConfirm(form: NgForm) {
    this.submitAttempted = true;

    if (this.newPassword !== this.confirmPassword) {
      this.passwordsDontMatch = true;
      return;
    }

    this.passwordsDontMatch = false;
  
    if (form.valid) {
      this.userService.updatePassword(this.email, this.newPassword).subscribe(async (result: any) => {
        if (result === 'Contraseña actualizada correctamente') {
          this.onConfirm2();
        }
        else {
          const alert = await this.alertController.create({
            header: 'Alerta',
            message: 'Hubo un error al actualizar la contraseña',
            buttons: ['OK']
          });
      
          await alert.present();
        }
      });
    } 
  }

  async onConfirm2(){
    const modal = await this.modalController.create({
      component: PasswordChangedPage,
      cssClass: 'successModal',
    });

    await modal.present();
    this.navCtrl.navigateRoot(['login']);
  }

  
}
