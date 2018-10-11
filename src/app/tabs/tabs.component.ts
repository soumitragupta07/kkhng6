import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';


import { Contract } from '../shared/model/contract.model';
import { ContractService } from '../shared/service/contract.service';
import { User } from '../shared/model/user.model';
import { KeycloakService } from '../shared/service/keycloak.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent
{

 


  
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
 
  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }
 
  // disableEnable() {
  //   this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  // }

}
