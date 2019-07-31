import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorService } from '../services/error.service';
import { LoadingService } from './../services/loading.service';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss']
})
export class MovieDetailsPage implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private loadingService: LoadingService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.loadingService.present('Loading datails...');
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(id)
      .subscribe(
        data => {
          this.movie = data;
          this.loadingService.dismiss();
        },
        error => {
          this.errorService.handle(error);
          this.loadingService.dismiss();
        }
      );
  }

}
