import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rdv} from '../model/rdv';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) {
    }


  findAllByPatientAndPasses(idPatient) : Observable<Array<Rdv>> {
    return this.http.get<Array<Rdv>>('http://localhost:8080/rdv/by-patient-passes/' + idPatient)
  }

  findAllByPatientPlanifies(idPatient) : Observable<Array<Rdv>> {
    return this.http.get<Array<Rdv>>('http://localhost:8080/rdv/by-patient-planifies/' + idPatient)
  }

}
