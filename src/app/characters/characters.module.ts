import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersService } from '../shared/services/characters.service';
import { CharacterCardModule } from '../shared/components/character-card/character-card.module';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule,
    NgbModule,
    CharacterCardModule
  ],
  declarations: [
    CharactersComponent
  ],
  providers: [
    CharactersService
  ]
})

export class CharactersModule { }
