import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})

export class HomeModule { }
