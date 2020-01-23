import { Component, OnInit } from '@angular/core';

import { Address } from "../model/Address";
import { Document } from "../model/Document";
import { Farmer } from "../model/Farmer";

import { FarmerService } from "../services/farmer.service";

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  document: Document = {
    documentNumber: '',
    documentType: ''
  };

  address: Address = {
    address: '',
    country: '',
    state: '',
    street: ''
  };

  farmer: Farmer = {
    id: "",
    name: "",
    document: this.document,
    address: this.address
  };

  searchable = '';

  constructor(private farmerService: FarmerService) { }

  ngOnInit() {
  }

  searchFarmer(searchable) {
    
    this.farmerService.getFarmer(searchable)
      .subscribe(farmer => this.farmer = farmer[0]);
  
  }

}
