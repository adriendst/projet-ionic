import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import { enableProdMode } from '@angular/core';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {defineCustomElements} from "@ionic/pwa-elements/loader";

import {environment} from "../../environments/environment";
import {AppModule} from "../app.module";
import {ToastController} from "@ionic/angular";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

defineCustomElements(window);


@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  public photos: picture[] = [];

  constructor(
    private toastCtrl: ToastController,
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  async addNewPhoto(){
    const capture = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    this.photos.unshift(<picture>{
      filepath: ' ',
      webviewPath: capture.webPath
    })

    this.presentToast()

  }

  takePhoto(){
    this.addNewPhoto()
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Waouw ! Jolie photo dis donc !',
      duration: 2000
    });
    await toast.present();
  }
}



export interface picture {
  filepath: string;
  webviewPath: string;
}
