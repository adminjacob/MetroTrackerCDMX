import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PasswordChangedPage } from '../password-changed/password-changed.page';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.page.html',
  styleUrls: ['./confirm-password.page.scss'],
})
export class ConfirmPasswordPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {

  }


  async onConfirm() {
    const modal = await this.modalController.create({
      component: PasswordChangedPage,
      cssClass: 'successModal',
    });

    await modal.present();
    this.navCtrl.navigateRoot(['login']);
  }
}
