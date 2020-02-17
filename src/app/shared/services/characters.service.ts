import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../interfaces/character.interface';
import { Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Inject({})

export class CharactersService {
  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<Array<ICharacter>> {
    return this.httpClient
      .get(`${environment.API.URL}/character`)
      .pipe(map(response => response as Array<ICharacter>));
  }

  getMultipleCharacters(ids: string): Observable<Array<ICharacter>> {
    return this.httpClient
      .get(`${environment.API.URL}/character/${ids}`)
      .pipe(map(response => response as Array<ICharacter>));
  }

  getSingleCharacter(id: string): Observable<ICharacter> {
    return this.httpClient
      .get(`${environment.API.URL}/character/${id}`)
      .pipe(map(response => response as ICharacter));
  }
}
