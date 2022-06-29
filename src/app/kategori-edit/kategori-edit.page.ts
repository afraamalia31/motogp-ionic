import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kategori-edit',
  templateUrl: './kategori-edit.page.html',
  styleUrls: ['./kategori-edit.page.scss'],
})
export class KategoriEditPage implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public nav: NavController,
    public app: AppService
  ) { }

  id: string = this.route.snapshot.paramMap.get('id');
  kategori: any;

  simpan() {
    this.app.update('kategori', this.id, this.kategori).then(() => {
      this.app.toast('Perubahan kategori telah disimpan');
    });
  }

  hapus() {
    this.app.delete('kategori', this.id).then(() => {
      this.app.toast('Kategori telah dihapus');
      this.nav.back();
    });
  }

  ionViewDidEnter() {
    this.app.doc('kategori', this.id).subscribe(res => {
      this.kategori = res;
    });
  }

  ngOnInit() {
  }

}
