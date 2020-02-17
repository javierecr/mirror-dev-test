import { EpisodesService } from './../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';
import { Episode } from '../shared/models/episode';
import { map } from 'rxjs/operators';
import { EpisodesResponse } from './responses/episodes.response';
import { Pagination } from '../shared/models/pagination';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Array<Episode> = new Array(Episode.emptyObject())
  pagination: Pagination = new Pagination({})

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit() {
    this.getEpisodes()
  }

  private getEpisodes(): void {
    this.episodesService
      .getEpisodes()
      .pipe(
        map((response: any) => {
          return new EpisodesResponse(response)
        })
      )
      .subscribe((episodes: EpisodesResponse) => {
        this.episodes = episodes.episodes
        this.pagination = episodes.paginationMeta
      })
  }
}
