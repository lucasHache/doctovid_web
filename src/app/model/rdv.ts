import {Adresse} from './adresse';
import {Patient} from './patient';
import {Praticien} from './praticien';
import {Motif} from './motif';
import {Creneau} from './creneau';


export class Rdv{
  id:number;
  version:number;
  patient: Patient;
  praticien: Praticien;
  motif: Motif;
  creneaux: Array<Creneau>;


  constructor(id?: number,version?: number, patient?:Patient, praticien?:Praticien, motif?:Motif, creneaux?:Array<Creneau>) {
    this.id = id;
    this.version = version;
    this.patient = patient;
    this.praticien = praticien;
    this.motif = motif;
    this.creneaux = creneaux;

  }
}
