import { IEpisode } from "../interfaces/episode.interface";
import * as moment from 'moment';

export class Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;

  constructor(attrs: IEpisode) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.air_date = attrs.air_date;
    this.episode = attrs.episode;
    this.characters = attrs.characters;
    this.url = attrs.url;
    this.created = attrs.created;
  }

  static emptyObject(): Episode {
    return new this({
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: ''
    });
  }
}