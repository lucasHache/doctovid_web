import {Adresse} from './adresse';
import {Praticien} from './praticien';
import {Motif} from './motif';
import {LieuConsult} from './lieuConsult';
import {Rdv} from './rdv';


export class Creneau{
  id:number;
  version:number;
  date:Date;
  dispo: Boolean;
  rdv: Rdv;
  lieuConsult: LieuConsult;

  constructor(id?: number,version?: number, date?:Date, dispo?:Boolean, lieuxConsult?:LieuConsult, rdv?:Rdv) {
    this.id = id;
    this.version = version;
    this.date = date;
    this.dispo = dispo;
    this.rdv = rdv;
    this.lieuConsult = lieuxConsult;
  }
}
