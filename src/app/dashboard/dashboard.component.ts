import { Contract } from '../shared/model/contract.model';
import { ContractService } from '../shared/service/contract.service';
import { User } from '../shared/model/user.model';
import { KeycloakService } from '../shared/service/keycloak.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile: User;
    contracts: Contract[];
    public loading = false;

    constructor(private keycloakService: KeycloakService,
        private contractService: ContractService) {
    }

    public ngOnInit(): void {
        this.loading = true;
        this.profile = this.keycloakService.getUser();
    }

    public isManager(): boolean {
        return this.keycloakService.hasAnyRole(['manager']);
    }

    public isAdmin(): boolean {
        return this.keycloakService.hasAnyRole(['admin']);
    }

    public isDoctor(): boolean {
      return this.keycloakService.hasAnyRole(['Doctor']);
  }

  public isDietician(): boolean {
      return this.keycloakService.hasAnyRole(['Dietician']);
  }

  public isPatient(): boolean {
    return this.keycloakService.hasAnyRole(['Patient']);
}


    public getContracts() {
        this.contractService.getContracts().subscribe(
            data => {
                this.contracts = data;
            }
        );
    }

}
