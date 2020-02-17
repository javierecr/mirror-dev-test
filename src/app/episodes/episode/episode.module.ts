import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeComponent } from './episode.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';

@NgModule({
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    FormsModule,
    NgbModule,
    CharacterCardModule
  ],
  declarations: [
    EpisodeComponent
  ]
})

export class EpisodeModule { }
