import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { Episode } from 'src/app/shared/models/episode';
import { map } from 'rxjs/operators';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { Character } from 'src/app/shared/models/character';
import { EpisodeCharactersResponse } from '../responses/episode-characters.response';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  providers: [CharactersService]
})
export class EpisodeComponent implements OnInit {

  episodeId: string
  episode: Episode = Episode.emptyObject()
  charactersList: Array<string> = []
  episodeCharacters: Array<Character>

  constructor(
    private activatedRoute: ActivatedRoute,
    private episodesService: EpisodesService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.episodeId) {
      this.getEpisodeInfo()
    }
  }

  private getEpisodeInfo(): void {
    this.episodesService
      .getSingleEpisode(this.episodeId)
      .pipe(
        map((response: any) => {
          return new Episode(response)
        })
      )
      .subscribe((episode: Episode) => {
        this.episode = episode
        if (this.episode) {
          this.getCharactersInfo()
        }
      })
  }

  private getCharactersInfo(): void {
    let characterIds = this.episode.characters.map(character => {
      return character.replace('https://rickandmortyapi.com/api/character/', '')
    })
    
    this.charactersService
    .getMultipleCharacters(characterIds.join())
    .pipe(
      map((response: any) => {
        return new EpisodeCharactersResponse(response)
      })
    )
      .subscribe((characters: EpisodeCharactersResponse) => {
      this.episodeCharacters = characters.characters
    })
  }

}
