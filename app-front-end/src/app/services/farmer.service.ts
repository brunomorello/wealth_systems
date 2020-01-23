import { Injectable } from '@angular/core';

import { Farmer } from "../model/Farmer";
import { Document } from "../model/Document";
import { Address } from "../model/Address";

import { Observable, of } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http: HttpClient) { }

  private backendUrl = 'http://127.0.0.1:3000/farmer';

  getFarmer(filter: string): Observable<Farmer[]> {

    const url = `${this.backendUrl}/${filter}`;

    console.log(`getFarmer(${filter})`);

    return this.http.get<Farmer[]>(url);

  }

}
