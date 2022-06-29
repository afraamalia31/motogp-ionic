import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  menu: any = [
    {label: 'Kategori', icon: 'file-tray-stacked', link: '/kategori'}
  ]

  preview: any = [
    {label: 'Preview MotorGP', icon: 'file-tray-stacked', link: '/preview'}
  ]


}
