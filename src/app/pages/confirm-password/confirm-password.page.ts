import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PasswordChangedPage } from '../password-changed/password-changed.page';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.page.html',
  styleUrls: ['./confirm-password.page.scss'],
})
export class ConfirmPasswordPage implements OnInit {

  email: string = '';

  newPassword: string;
  confirmPassword: string;

  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  viewPassword: boolean = false;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
    private userService: UserService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.email=navigation?.extras.state?.email;
    console.log(this.email);
  }

  ngOnInit() {
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  onBack() {
    this.navCtrl.back();
  }

  async onConfirm() {
    if (this.newPassword === this.confirmPassword) {

      console.log(this.newPassword);

      this.userService.updatePassword(this.email,this.newPassword).subscribe((result:any)=>{
        if(result==='Contraseña actualizada correctamente'){
          
        }
      });

    } else {
      alert('Las contraseñas no coinciden');
    }
  }

  
}
