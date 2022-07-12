import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular';
import {TEAM} from '../../assets/team';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  public team = TEAM;

  menu: any = [
    {label: 'Kategori', icon: 'file-tray-stacked', link: '/kategori'}
  ]

  preview: any = [
    {label: 'Season', icon: 'file-tray-stacked', link: '/preview'}
  ]

  race: any = [
    {label: 'Next Race', icon: 'file-tray-stacked', link: '/race'}
  ]

  tea: any = [
    {label: 'Team', icon: 'file-tray-stacked', link: '/team'}
  ]

  players: any = [
    {label: 'Players', icon: 'file-tray-stacked', link: '/players'}
  ]


}
