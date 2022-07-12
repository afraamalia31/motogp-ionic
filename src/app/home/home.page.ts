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
    {label: 'Season', icon: 'file-tray-stacked', link: '/preview'}
  ]

  race: any = [
    {label: 'Next Race', icon: 'file-tray-stacked', link: '/race'}
  ]

  team: any = [
    {label: 'Team', icon: 'file-tray-stacked', link: '/team'}
  ]


}
