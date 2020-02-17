import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodesService } from '../shared/services/episodes.service';

@NgModule({
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EpisodesComponent
  ],
  providers: [ EpisodesService]
})

export class EpisodesModule { }
