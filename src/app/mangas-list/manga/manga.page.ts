import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {MangaService} from "../../manga.service";
import {ChangeDetectorRef} from "@angular/core";

@Component({
  selector: 'app-manga',
  templateUrl: './manga.page.html',
  styleUrls: ['./manga.page.scss'],
})
export class MangaPage implements OnInit {
  modif: boolean = false;
  manga: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Manga: MangaService,
    private router: Router,
    private toastCtrl: ToastController,
    private ChangeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Manga.get(id!).subscribe((data: any) => {
      this.manga = data;
    });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'manga modifié avec succès',
      duration: 2000
    });
    await toast.present();
  }

  async onModif() {
    if (this.manga.image == "" || this.manga.name == "" || this.manga.mangaka == "" || this.manga.nmbrVolume == null || this.manga.nmbrChap == null) {
      const toast = this.toastCtrl.create({
        message: 'Veuillez remplir les champs correctement',
        duration: 2000
      });
      (await toast).present().then(() => {
        setTimeout(() => {
        }, 2000);
      });
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Confirmation',
        message: 'Vous confirmez vos modifications ?',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Annulation');
            }
          }, {
            text: 'Confirmer',
            handler: () => {
              this.Manga.update(this.manga).subscribe(() => {
                this.presentToast();
                this.modif = false;
                this.ChangeDetector.detectChanges();
              });
            }
          }
        ]
      });
      await alert.present();
    }
  }

  changeModif() {
    this.modif = true;
    this.ChangeDetector.detectChanges();
  }

  onDelete(id: any) {
    this.Manga.delete(id);
    this.router.navigate(['/tab/manga']);
  }

}
