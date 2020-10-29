import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {Rdv} from '../model/rdv';
import {PatientService} from './patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patient: Patient = new Patient();
  rdvsPasses: Array<Rdv> = new Array<Rdv>();
  rdvsFuturs: Array<Rdv> = new Array<Rdv>();


  constructor(private patientService:PatientService, private route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      this.chargeRdvsPasses(parameters.id);
      this.chargeRdvsFuturs(parameters.id)
    })

  }

  chargeRdvsPasses(idPatient: number) {
    this.patientService.findAllByPatientAndPasses(idPatient).subscribe(resp => this.rdvsPasses = resp, error => console.log(error));
  }

  chargeRdvsFuturs(idPatient: number) {
    this.patientService.findAllByPatientPlanifies(idPatient).subscribe(resp => this.rdvsFuturs = resp, error => console.log(error));
  }


  ngOnInit(): void {
  }

}
