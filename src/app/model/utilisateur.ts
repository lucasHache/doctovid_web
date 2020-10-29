export class Utilisateur{
  id:number;
  version:number;
  mail:string;
  mdp:string;

  constructor(id?: number,version?: number, mail?:string, mdp?: string) {
    this.id = id;
    this.version = version;
    this.mail = mail;
    this.mdp = mdp;


  }
}
