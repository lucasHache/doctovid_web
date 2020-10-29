import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Praticien} from "../model/praticien";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResultatService {

  constructor(private http: HttpClient) { }

  findAllPraticienByVille(ville): Observable<Array<Praticien>>{
    return this.http.get<Array<Praticien>>('http://localhost:8080/praticien/by-ville/' + ville)
  }

  findAllPraticienBySpecialite(specialite): Observable<Array<Praticien>>{
    return this.http.get<Array<Praticien>>('http://localhost:8080/praticien/by-spe/' + specialite)
  }

  findPraticienByNom(nomPraticien:string): Observable<Praticien>{
    return this.http.get<Praticien>('http://localhost:8080/praticien/' + nomPraticien)
  }

}
