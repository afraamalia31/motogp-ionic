import { Component, OnInit } from '@angular/core';
import { PLAYER } from './../../assets/player';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() { }

  public player = PLAYER;
  
  ngOnInit() {
  }

}
