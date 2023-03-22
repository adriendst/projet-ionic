import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangaNewPageRoutingModule } from './manga-new-routing.module';

import { MangaNewPage } from './manga-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangaNewPageRoutingModule
  ],
  declarations: [MangaNewPage]
})
export class MangaNewPageModule {}
