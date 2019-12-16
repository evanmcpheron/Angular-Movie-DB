/*
  This is a service, generally you use these to make requests to an
  api thats built on the backend. You'll see that I am returning a
  get request in the getMovies function, this allows us
  to subscribe to the call to the URL and listen for
  the return value. Itsa very niice.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _http: HttpClient ) { }
  api_key: string = '774967ae32bbffb5cd944ea776596c9b';
  db_url: string = `https://api.themoviedb.org/3/search/movie`;
  movie_id: string = `https://api.themoviedb.org/3/movie/`;

  // https:api.themoviedb.org/3/search/movie?api_key=774967ae32bbffb5cd944ea776596c9b&language=en-US&query=harry&page=1&include_adult=false

  test_obj;

  getDetails(id) {
    return this._http.get(this.movie_id + `${id}?api_key=${this.api_key}&language=en-US`)
  }

  getMovies(query, page) {
    return this._http.get(this.db_url + `?api_key=${this.api_key}&query=${query}&page=${page}&include_adult=false`);
  }

}


