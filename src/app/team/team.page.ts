import { Component, OnInit } from '@angular/core';
import {TEAM} from '../../assets/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor() { }
  public team = TEAM;
  
  ngOnInit() {
  }

}
