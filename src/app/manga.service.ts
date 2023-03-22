import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Manga } from "./models/manga.model";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private dbPath = '/mangas';
  mangasRef: AngularFirestoreCollection<Manga>;

  constructor(
    private db: AngularFirestore
  ) {
    this.mangasRef = db.collection(this.dbPath);
  }

  getAllMangas(): any {
    return this.mangasRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewManga(manga: Manga): any {
    return new Observable(obs => {
      this.mangasRef.add({...manga}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.mangasRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(manga: Manga) {
    return new Observable(obs => {
      this.mangasRef.doc(manga.id).update(manga);
      obs.next();
    });
  }

  delete(id: any){
    this.db.doc(`mangas/${id}`).delete();
  }

}
