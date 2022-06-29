import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kategori-add',
  templateUrl: './kategori-add.page.html',
  styleUrls: ['./kategori-add.page.scss'],
})
export class KategoriAddPage implements OnInit {

  constructor(
    public app: AppService
  ) { }

  kategori:any = {};
  subkategori: string;

  addSub() {
    this.kategori.sub.push(this.subkategori);
    this.subkategori = null;
  }

  removeSub(item) {
    this.kategori.sub.splice(item.indexOf(), 1);
  }
  simpan() {
    this.app.add('kategori', this.kategori).then(() => {
      this.app.toast('Data kategori telah disimpan');
      this.kategori = {};
      this.kategori.sub = [];
    });
  }

  ionViewDidEnter() {
    this.kategori.sub = [];
  }

  ngOnInit() {
  }

}
