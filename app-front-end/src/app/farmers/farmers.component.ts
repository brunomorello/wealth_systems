import { Component, OnInit } from '@angular/core';

import { Farmer } from "../model/Farmer";
import { FarmerService } from "../services/farmer.service";

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  // initialize farmer
  farmer: Farmer = {
    id: '',
    name: '',
    document: { documentNumber: '', documentType: ''},
    address: { address: '', country: '', state: '', street: ''}
  };

  // query filter
  searchable = '';

  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
  }

  searchFarmer(searchable) {

    if(!searchable) {
      alert('please type a name or doc#');
      return;
    }
    
    this.farmerService.getFarmer(searchable)
      .subscribe(farmers => {
        console.log(farmers);
        this.farmer = farmers[0];
      });
  
  }

}
