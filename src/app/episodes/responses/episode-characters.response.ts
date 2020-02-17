import { Episode } from "src/app/shared/models/episode";
import { Character } from "src/app/shared/models/character";

export class EpisodeCharactersResponse {
  characters: Array<any> = [];

  constructor(httpResponse: any) {
    httpResponse.forEach((character: any) => {
      this.characters.push(new Character(character));
    });
  }
}