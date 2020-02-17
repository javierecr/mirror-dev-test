import { Episode } from "src/app/shared/models/episode";

export class EpisodesResponse {
  paginationMeta: any = {};
  episodes: Array<any> = [];

  constructor(httpResponse: any) {
    httpResponse.results.forEach((episode: any) => {
      this.episodes.push(new Episode(episode));
    });

    this.paginationMeta = httpResponse.info;
  }
}