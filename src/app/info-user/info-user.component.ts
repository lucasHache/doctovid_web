import { Component, OnInit } from '@angular/core';
import {InfoUserService} from "./info-user.service";
import {Adresse} from "../model/adresse";
import {SessionService} from "../session.service";

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  inputType = 'password';
  showHideClass = 'fas fa-eye';
  displayInput = 'display: none';
  displayButton = '';
  buttonText = 'Modifier'
  user: any = null;

  constructor( private infoUserService: InfoUserService,  private sessionService : SessionService) {
    this.user = sessionService.getUser();
  }

  ngOnInit(): void {
  }

  // update() {
  //   console.log(this.user);
  //   this.infoUserService.modifyUser(this.user).subscribe(resp => {
  //       this.infoUserService.findById(resp.id).subscribe(resp =>{
  //         this.sessionService.setUser(resp);
  //         this.user = this.sessionService.getUser();
  //         console.log(this.user);
  //         this.hautDePage();
  //       },error => console.log(error))
  //     },error => console.log(error)
  //   ) ;
  // };

  showPassword() {
    if (this.inputType == 'password') {
      this.inputType = 'text';
      this.showHideClass = 'fas fa-eye-slash';
    } else {
      this.inputType = 'password';
      this.showHideClass = 'fas fa-eye';
    }
  };

  showInput() {
    if (this.displayInput == 'display: none') {
      this.displayInput = '';
      this.displayButton = 'display: none';
    }
  }

}
