import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangasListPageRoutingModule } from './mangas-list-routing.module';

import { MangasListPage } from './mangas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangasListPageRoutingModule
  ],
  declarations: [MangasListPage]
})
export class MangasListPageModule {}
