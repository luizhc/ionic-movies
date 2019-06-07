import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  movies: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies()
      .subscribe(
        (data: any) => {
          console.log(data);
          this.movies = data.results;
        }
      );
  }

}
