
import { HttpClient } from '@angular/common/http';
import { IEpisode } from '../interfaces/episode.interface';
import { Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Inject({})

export class EpisodesService {
  constructor(private httpClient: HttpClient) { }

  getEpisodes(): Observable<Array<IEpisode>> {
    return this.httpClient
      .get(`${environment.API.URL}/episode`)
      .pipe(map(response => response as Array<IEpisode>));
  }

  getSingleEpisode(id: string): Observable<IEpisode> {
    return this.httpClient
      .get(`${environment.API.URL}/episode/${id}`)
      .pipe(map(response => response as IEpisode));
  }
}
