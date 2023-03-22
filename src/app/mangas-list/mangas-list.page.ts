import { Component, OnInit } from '@angular/core';
import { MangaService } from "../manga.service";

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.page.html',
  styleUrls: ['./mangas-list.page.scss'],
})
export class MangasListPage implements OnInit {
mangas! :any;
constructor(
  private manga : MangaService
) {
}

  ngOnInit(): void {
  this.manga.getAllMangas().subscribe((data : any) =>{
    this.mangas = data
  })
  }

}
