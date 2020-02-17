import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CharactersResponse } from './responses/characters.response';
import { Pagination } from '../shared/models/pagination';
import { CharactersService } from '../shared/services/characters.service';
import { Character } from '../shared/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters: Array<Character>;
  pagination: Pagination = new Pagination({})

  constructor(
    private charactersService: CharactersService
  ) {
    /** Do nothing */
   }

  ngOnInit(): void {
    this.getCharacters()
  }

  private getCharacters(): void {
    this.charactersService.getCharacters()
    .pipe(
      map((response: any) => {
        return new CharactersResponse(response)
      })
    )
    .subscribe((charactersResponse: CharactersResponse) => {
      this.characters = charactersResponse.characters
      this.pagination = charactersResponse.paginationMeta
    })
  }
 
}
