import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangaNewPage } from './manga-new.page';

const routes: Routes = [
  {
    path: '',
    component: MangaNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangaNewPageRoutingModule {}
