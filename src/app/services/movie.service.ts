import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_MOVIEDB, APIKEY_MOVIEDB } from './../../environments/constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get(`${API_MOVIEDB}/movie/popular?api_key=${APIKEY_MOVIEDB}`);
  }

  getById(id) {
    return this.http.get(`${API_MOVIEDB}/movie/${id}?api_key=${APIKEY_MOVIEDB}`);
  }

}
