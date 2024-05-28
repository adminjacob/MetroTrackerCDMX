import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isUserLoggedIn: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    const intro = localStorage.getItem('intro');
    this.isUserLoggedIn = !!intro && intro !== 'null';
  }

  salir(){
    localStorage.clear();
    this.navCtrl.navigateRoot(['/intro']);
  }

}
