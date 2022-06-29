import { Component, OnInit } from '@angular/core';
import {MOTOR} from '../../assets/data';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  constructor() { }
  public motor = MOTOR;

  ngOnInit() {
  }

}
