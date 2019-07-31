import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_MOVIEDB, APIKEY_MOVIEDB, LANGUAGE_ENGLISH } from './../../environments/constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page = 1) {
    return this.http.get(`${API_MOVIEDB}/movie/popular?page=${page}&language=${LANGUAGE_ENGLISH}&api_key=${APIKEY_MOVIEDB}`);
  }

  getById(id) {
    return this.http.get(`${API_MOVIEDB}/movie/${id}?language=${LANGUAGE_ENGLISH}&api_key=${APIKEY_MOVIEDB}`);
  }

}
