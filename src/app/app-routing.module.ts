import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {PatientComponent} from './patient/patient.component';
import {PraticienComponent} from './praticien/praticien.component';
import {ResultatComponent} from './resultat/resultat.component';
import {InfoUserComponent} from './info-user/info-user.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'praticien', component: PraticienComponent},
  {path: 'resultat', component: ResultatComponent},
  {path: 'info-user', component: InfoUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
