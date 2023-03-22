import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangasListPage } from './mangas-list.page';

const routes: Routes = [
  {
    path: '',
    component: MangasListPage
  },
  {
    path: ':id',
    loadChildren: () => import('./manga/manga.module').then( m => m.MangaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangasListPageRoutingModule {}
