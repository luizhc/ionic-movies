import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoadingService } from '../services/loading.service';
import { MovieService } from '../services/movie.service';
import { ErrorService } from './../services/error.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage {

  movies: any;
  refresher: any;
  isRefreshing: boolean;
  page = 1;
  infiniteScroll: any;

  constructor(
    private movieService: MovieService,
    private loadingService: LoadingService,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ionViewDidEnter() {
    this.loadMovies();
  }

  loadMovies(newPage: boolean = false) {
    if (!newPage) {
      this.loadingService.present('Loading movies...');
    }
    this.movieService.getPopularMovies(this.page)
      .subscribe(
        (data: any) => {
          if (newPage) {
            this.movies = this.movies.concat(data.results);
            this.infiniteScroll.complete();
          } else {
            this.movies = data.results;
          }
          if (!newPage) {
            this.loadingService.dismiss();
          }
          if (this.isRefreshing) {
            this.refresher.complete();
            this.isRefreshing = false;
          }
        },
        error => {
          this.errorService.handle(error);
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

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.page++;
    this.loadMovies(true);
  }

  goDetails(id) {
    this.router.navigate([`movie/${id}`]);
  }

}
