import {Utilisateur} from './utilisateur';
import {Rdv} from './rdv';
import {LieuConsult} from './lieuConsult';

export class Praticien extends Utilisateur{
  nom:string;
  prenom:string;
  specialite:string;
  rdvs: Array<Rdv>;
  lieuxConsult: Array<LieuConsult>;


  constructor(id?: number,version?: number, nom?:string, prenom?: string, specialite?:string, rdvs?:Array<Rdv>, lieuxConsult?: Array<LieuConsult>) {
    super(id, version);
    this.nom = nom;
    this.prenom = prenom;
    this.specialite = specialite;
    this.rdvs = rdvs;
    this.lieuxConsult = lieuxConsult;
  }
}
