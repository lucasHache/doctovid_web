import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PatientComponent } from './patient/patient.component';
import { PraticienComponent } from './praticien/praticien.component';
import { ResultatComponent } from './resultat/resultat.component';
import { InfoUserComponent } from './info-user/info-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PatientComponent,
    PraticienComponent,
    ResultatComponent,
    InfoUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
