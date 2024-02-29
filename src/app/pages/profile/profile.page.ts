import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id:string="";
  correo:string="";
  fechaDeNacimiento:string="";
  genero:string="";
  nombreCompleto:string="";
  imagenPerfil:string;

  constructor(private navCtrl: NavController, private router: Router, private userService: UserService) { 

  }

  ngOnInit() {
    this.id=localStorage.getItem('id');
    this.getInformation();
  }

  getInformation(){
    this.userService.getUser(this.id).subscribe((result:any)=>{
      this.correo=result.correo;
      this.fechaDeNacimiento=result.fechaDeNacimiento;
      this.genero=result.genero;
      this.nombreCompleto=result.nombreCompleto;
      this.imagenPerfil=result.imagenPerfil;
    });
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(['/intro']);
  }

  updateInfo() {
    this.router.navigate(['edit-profile']);
  }

  irANotificaciones(){
    this.navCtrl.navigateForward('/notificaciones');
  }
}
