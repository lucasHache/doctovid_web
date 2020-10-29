export class Adresse{
  rue : string;
  complement: string;
  cp: string;
  ville: string;


  constructor(rue?: string, complement?: string, cp?: string, ville?: string) {
    this.rue = rue;
    this.complement = complement;
    this.cp = cp;
    this.ville = ville;
  }

}
