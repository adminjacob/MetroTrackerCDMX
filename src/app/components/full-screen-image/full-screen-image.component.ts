import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import SwiperCore, { Zoom, Navigation } from 'swiper';

// Instalar módulos de Swiper
SwiperCore.use([Zoom, Navigation]);

@Component({
  selector: 'app-full-screen-image',
  templateUrl: './full-screen-image.component.html',
  styleUrls: ['./full-screen-image.component.scss'],
})
export class FullScreenImageComponent {
  @Input() imageUrl: string;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
}