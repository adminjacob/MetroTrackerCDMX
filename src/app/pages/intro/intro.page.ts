import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  isLast: boolean = false;
  length: any = 0;
  index: any = 0;

  items: any[] = [];
  constructor(
    private navCtrl: NavController
  ) {
    setTimeout(() => {
      this.slides.length().then((data) => {
        this.length = data;
        this.items = [];
        for (let i = 0; i < this.length; i++) {
          this.items.push(i);
        }
      })
    }, 1000);
  }

  ngOnInit() {
  }

  onLogin() {
    this.navCtrl.navigateRoot(['login']);
  }

  slideChanged(event) {
    this.slides.getActiveIndex().then((data: any) => {
      console.log(data);
      this.index = data;
    });

    this.slides.isEnd().then((data) => {
      this.isLast = data;
    });
  }
}
