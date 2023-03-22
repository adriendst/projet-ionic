export class Manga {
  id?: string;
  name:string;
  mangaka:string;
  nmbrChap:number;
  nmbrVolume: number;
  image: string;



  constructor() {
  this.image ='';
  this.name ='';
  this.mangaka='';
  this.nmbrChap = 0;
  this.nmbrVolume = 0;
  }
}
