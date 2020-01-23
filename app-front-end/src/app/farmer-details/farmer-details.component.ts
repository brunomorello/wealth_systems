import { Component, OnInit, Input } from '@angular/core';
import { Farmer } from "../model/Farmer";

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() farmer: Farmer;

}
