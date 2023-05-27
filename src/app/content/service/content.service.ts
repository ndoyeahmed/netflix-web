import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private api = '/api/';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(page = 0, size = 10) {
    const options = {
      params: new HttpParams().set('page', page.toString()).set('size', size.toString())
    }
    return this.http.get(this.api + 'movies', options);
  }

  getTvShows(page = 0, size = 10) {
    const options = {
      params: new HttpParams().set('page', page.toString()).set('size', size.toString())
    }
    return this.http.get(this.api + 'tvshows', options);
  }
}
