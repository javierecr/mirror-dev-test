
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/shared/models/character';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characterId: string
  character: Character = Character.emptyObject()

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.characterId) {
      this.getCharacterInfo()
    }
  }

  private getCharacterInfo(): void {
    this.charactersService
      .getSingleCharacter(this.characterId)
      .pipe(
        map((response: any) => {
          return new Character(response)
        })
      )
      .subscribe( (character: Character) => {
        this.character = character
      })
  }

}
