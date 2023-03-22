import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Manga} from 'src/app/models/manga.model';
import {MangaService} from "../manga.service";

@Component({
  selector: 'app-manga-new',
  templateUrl: './manga-new.page.html',
  styleUrls: ['./manga-new.page.scss'],
})
export class MangaNewPage implements OnInit {
  public manga!: Manga;

  constructor(
    private Manga: MangaService,
    private toastCtrl: ToastController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.manga = new Manga();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau manga enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tab/manga']);
      }, 2000);
    });
  }


  async add() {
    if (this.manga.image == "" || this.manga.name == "" || this.manga.mangaka == "" || this.manga.nmbrVolume == null || this.manga.nmbrChap == null) {
      const toast = this.toastCtrl.create({
        message: 'Veuillez remplir les champs correctement',
        duration: 2000
      });
      (await toast).present().then(() => {
        setTimeout(() => {
        }, 2000);
      });
    }
    else{
      this.Manga.saveNewManga(this.manga).subscribe(() => {
        this.manga = new Manga();
        this.presentToast();
      })
    }
  }

}

