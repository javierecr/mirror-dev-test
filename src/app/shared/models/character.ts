import * as moment from 'moment';
import { ICharacter } from '../interfaces/character.interface';

export class Character {
  id: number;
  
  name: string;
  
  status: string;
  
  species: string;
  
  type: string;
  
  gender: string;
  
  origin: {
    name: string;
    
    url: string
  };
  
  location: {
    name: string;
    
    url: string;
    
  };
  
  image: string;
  
  episode: Array<string>;
  
  url: string;
  
  created: string;
  

  constructor(attrs: ICharacter) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.status = attrs.status;
    this.species = attrs.species;
    this.type = attrs.type;
    this.gender = attrs.gender;
    this.origin = attrs.origin;
    this.location = attrs.location;
    this.image = attrs.image;
    this.episode = attrs.episode;
    this.url = attrs.url;
    this.created = attrs.created;
  }

  get formattedCreatedDate(): string {
    return moment(this.created).format('MM/DD/YYYY hh:mm A');
  }

  get getOrigin(): string {
    return this.origin.name;
  }

  static emptyObject(): Character {
    return new this({
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: ''
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: '',
    });
  }
}
/* eslint-disable @typescript-eslint/camelcase */
