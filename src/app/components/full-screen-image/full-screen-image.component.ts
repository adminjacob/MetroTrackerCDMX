import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-full-screen-image',
  templateUrl: './full-screen-image.component.html',
  styleUrls: ['./full-screen-image.component.scss'],
})
export class FullScreenImageComponent {
  @Input() imageUrl: string;

  sliderOpts = {
    zoom:{
      maxRatio: 2
    }
  }

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }
}