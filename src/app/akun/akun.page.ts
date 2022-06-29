import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(
    public app: AppService
  ) { }

  ngOnInit() {
  }

}
