import { Component, OnInit } from '@angular/core';
import { PLAYER } from './../../assets/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  constructor() { }

  public player = PLAYER;

  detail: any = [
    {label: 'Detail', icon: 'file-tray-stacked', link: '/detail'}
  ]

  ngOnInit() {
  }


}
