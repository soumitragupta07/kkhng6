import { Contract } from './shared/model/contract.model';
import { ContractService } from './shared/service/contract.service';
import { User } from './shared/model/user.model';
import { KeycloakService } from './shared/service/keycloak.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
 {
     public loading =false;

    constructor() { }

    ngOnInit()
    {
      this.loading=true;
    }

}