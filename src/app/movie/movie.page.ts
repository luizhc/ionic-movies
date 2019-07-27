import { Component } from '@angular/core';

import { LoadingService } from '../services/loading.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage {

  movies: any;

  constructor(
    private movieService: MovieService,
    private loadingService: LoadingService
  ) { }

  ionViewDidEnter() {
    this.loadingService.present('Loading movies...');
    this.movieService.getPopularMovies()
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.loadingService.dismiss();
        }
      );
  }

}
