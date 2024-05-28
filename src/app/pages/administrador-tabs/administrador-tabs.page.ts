import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-administrador-tabs',
  templateUrl: './administrador-tabs.page.html',
  styleUrls: ['./administrador-tabs.page.scss'],
})
export class AdministradorTabsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.navCtrl.navigateRoot(['/intro']);
  }

}
