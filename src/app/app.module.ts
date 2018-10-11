import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { MaterialModule } from '@angular/material';MaterialModule.forRoot(),
import {MatSliderModule} from '@angular/material/slider';

//Loader
import { LoadingModule } from 'ngx-loading';

//primeng
import { DataTableModule } from 'primeng/components/datatable/datatable';
import {PanelModule } from 'primeng/components/panel/panel';
import {InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {DropdownModule } from 'primeng/components/dropdown/dropdown';

//keycloak
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './shared/service/keycloak.http';
import { KeycloakService } from './shared/service/keycloak.service';
import { ContractService } from './shared/service/contract.service';

//mat
import {

  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodValueMasterlistComponent } from './food-value-masterlist/food-value-masterlist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PesAcNutritionIntakesComponent } from './pes-ac-nutrition-intakes/pes-ac-nutrition-intakes.component';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2smarttableComponent } from './ng2smarttable/ng2smarttable.component';
import { SmarttableMainComponent } from './ng2smarttable/smarttable-main.component';
import { MatComponent } from './mat/mat.component';
import { MatTableCrudComponent } from './mat-table-crud/mat-table-crud.component';
import {DataService} from './mat-table-crud/services/data.service';
import { AddComponent } from './mat-table-crud/dialogs/add/add.component';
import { EditComponent } from './mat-table-crud/dialogs/edit/edit.component';
import { DeleteComponent } from './mat-table-crud/dialogs/delete/delete.component';
import { FoodMasterComponent } from './food-master/food-master.component';
import { FooddataService } from './food-master/fooddata.service';
import { PatientdataService } from './patientlist/patientdata.service';
import { AddfoodComponent } from './food-master/addfood/addfood.component';
import { EditfoodComponent } from './food-master/editfood/editfood.component';
import { DeletefoodComponent } from './food-master/deletefood/deletefood.component';
import { PrimengComponent } from './primeng/primeng.component';
import { DatatablecruddemoComponent } from './primeng/datatablecruddemo/datatablecruddemo.component';
import { CarService } from './primeng/car.service';



const appRoutes: Routes = [
 
  //{ path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'Dashboard', pathMatch: 'full' },

  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardComponent  },
  { path: 'FoodValueMasterList', component: FoodValueMasterlistComponent  },
  { path: 'pat', component:  PatientlistComponent  },
  { path: 'SmarttableMainComponent', component: SmarttableMainComponent  },
  { path: 'mat', component:  MatComponent  },
  { path: 'mattable', component: MatTableCrudComponent  },
  { path: 'food', component:  FoodMasterComponent  },

  { path: 'pan', component:  PesAcNutritionIntakesComponent },
  //primeng
  { path: 'pngcrud', component: DatatablecruddemoComponent },

  //{ path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'Dashboard' },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FoodValueMasterlistComponent,
    PatientlistComponent,
    PesAcNutritionIntakesComponent,
    TabsComponent,
    HeaderComponent,
    FooterComponent,
    Ng2smarttableComponent,
    SmarttableMainComponent,
    MatComponent,
    MatTableCrudComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    FoodMasterComponent,
    AddfoodComponent,
    EditfoodComponent,
    DeletefoodComponent,
    PrimengComponent,
    DatatablecruddemoComponent,
    
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingModule,

    DataTableModule, InputTextareaModule, PanelModule, DropdownModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
    
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent,
    AddfoodComponent,
    EditfoodComponent,
    DeletefoodComponent
    
  ],
  providers: [DataService,CarService,PatientdataService,KEYCLOAK_HTTP_PROVIDER,
    KeycloakService,
    ContractService,
    FooddataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
