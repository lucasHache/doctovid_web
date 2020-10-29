import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResultatService} from "./resultat.service";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {

  constructor(private resultatService: ResultatService, private route: ActivatedRoute) {
    // this.route.params.subscribe(parameters => {
    //   if parameters
    //   this.resultatService.findPraticienByNom(parameters.)
    // }
  }

  ngOnInit(): void {
  }

}
