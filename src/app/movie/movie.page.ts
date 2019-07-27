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
  refresher: any;
  isRefreshing: boolean;

  constructor(
    private movieService: MovieService,
    private loadingService: LoadingService
  ) { }

  ionViewDidEnter() {
    this.loadMovies();
  }

  loadMovies() {
    this.loadingService.present('Loading movies...');
    this.movieService.getPopularMovies()
      .subscribe(
        (data: any) => {
          console.log(data);
          this.movies = data.results;
          this.loadingService.dismiss();
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
        },
        error => {
          this.loadingService.dismiss();
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
        }
      );
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();
  }

}
