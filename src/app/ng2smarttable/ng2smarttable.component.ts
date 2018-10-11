import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
//import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-ng2smarttable',
  templateUrl: './ng2smarttable.component.html',
  styleUrls: ['./ng2smarttable.component.css']
})
export class Ng2smarttableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settings = {
    columns: {
      name: {
        title: 'Patient Name'
      },
      number: {
        title: 'P.Id'
      },
     
      // email: {
      //   title: 'Email'
      // },
      // status: {
      //   title: 'Status'
      // },
      intakes: {
        title: 'N.Intakes'
      },
      phone: {
        title: 'Phone'
      },
    }
  };

  data = [
    {
      
      name: "Leanne Graham",
      number:"P1881016",
      phone:"8828264536",
      email: "Sincere@april.biz",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    
    // ... list of items
    
    {
     
      name: "Nicholas DuBuque",
      number:"P1881016",
      phone:"8828264536",
      email: "Rey.Padberg@rosamond.biz",
      status: "discharged",
      intakes:"Prescribed"
  
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
    {
    
      name: "Ervin Howell",
      number:"P1881016",
      phone:"8828264536",
      email: "Shanna@melissa.tv",
      status: "discharged",
      intakes:"Prescribed"
    },
  ];



}
