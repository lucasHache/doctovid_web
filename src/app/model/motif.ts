import {Praticien} from './praticien';
import {LieuConsult} from './lieuConsult';
import {Rdv} from './rdv';

export class Motif{
  id:number;
  version:number;
  type: string;
  nbCreneau:number;
  lieuConsult:LieuConsult;
  rdvs:Array<Rdv>;



  constructor(id?: number,version?: number, nom?:string, type?: string, nbCreneau?:number, lieuConsult?:LieuConsult,rdvs?:Array<Rdv>) {
    this.id = id;
    this.version = version;
    this.type = type;
    this.nbCreneau= nbCreneau;
    this.lieuConsult = lieuConsult;
    this.rdvs=rdvs;
  }
}
