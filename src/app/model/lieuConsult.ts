import {Adresse} from './adresse';
import {Praticien} from './praticien';
import {Motif} from './motif';
import {Creneau} from './creneau';


export class LieuConsult{
  id:number;
  version:number;
  nom:string;
  adresse:Adresse;
  praticiens: Array<Praticien>;
  motifs: Array<Motif>;
  creneaux: Array<Creneau>;

  constructor(id?: number,version?: number, nom?:string, prenom?: string, specialite?:string,adresse?: Adresse, praticiens?:Array<Praticien>, motifs?:Array<Motif>, creneaux?:Array<Creneau>) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.adresse = adresse;
    this.praticiens = praticiens;
    this.motifs=motifs;
    this.creneaux = creneaux;
  }
}
