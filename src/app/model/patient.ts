import {Utilisateur} from './utilisateur';
import {Rdv} from './rdv';

export class Patient extends Utilisateur{
  nom:string;
  prenom:string;
  rdvs:Array<Rdv>;

  constructor(id?: number,version?: number, nom?:string, prenom?: string, rdvs?:Array<Rdv>) {
    super(id, version);
    this.nom = nom;
    this.prenom = prenom;
    this.rdvs = rdvs;
  }
}
