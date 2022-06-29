import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriAddPageRoutingModule } from './kategori-add-routing.module';

import { KategoriAddPage } from './kategori-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriAddPageRoutingModule
  ],
  declarations: [KategoriAddPage]
})
export class KategoriAddPageModule {}
