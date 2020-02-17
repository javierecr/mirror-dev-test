import { CharacterCardComponent } from './character-card.component';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    CharacterCardComponent
  ],
  exports: [
    CharacterCardComponent
  ]
})

export class CharacterCardModule { }
