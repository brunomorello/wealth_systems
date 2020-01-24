import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmersComponent } from './farmers/farmers.component';

import { FormsModule } from "@angular/forms";
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';

import { HttpClientModule } from "@angular/common/http";

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    FarmersComponent,
    FarmerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
