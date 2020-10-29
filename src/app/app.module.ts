import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PatientComponent } from './patient/patient.component';
import { PraticienComponent } from './praticien/praticien.component';
import { ResultatComponent } from './resultat/resultat.component';
import { InfoUserComponent } from './info-user/info-user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

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
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
