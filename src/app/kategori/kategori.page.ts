import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {

  constructor(
    public app: AppService
  ) { }

  kategori: any;

  ionViewDidEnter() {
    this.app.collection('kategori').subscribe(res => {
      this.kategori = res;
      
    });

  }

  ngOnInit() {
  }

}
