import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  result: any = null ;

  constructor(private sessionService: SessionService) {

  }

  ngOnInit(): void {
  }

}
