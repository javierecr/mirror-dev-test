import { Character } from "src/app/shared/models/character";


export class CharactersResponse {
  paginationMeta: any = {};
  characters: Array<any> = [];

  constructor(httpResponse: any) {
    httpResponse.results.forEach((character: any) => {
      this.characters.push(new Character(character));
    });

    this.paginationMeta = httpResponse.info;
  }
}