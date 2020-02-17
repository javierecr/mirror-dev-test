import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    CharacterComponent
  ],
  providers: []
})

export class CharacterModule { }
