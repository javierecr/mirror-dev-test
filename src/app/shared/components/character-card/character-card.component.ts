import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input('character') character: Character

  constructor() {
    /** Do nothing */
  }

  ngOnInit(): void {
    /** Do nothing */
  }

}
