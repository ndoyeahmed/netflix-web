import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../service/content.service';
import { MovieModel } from 'src/app/shared/models/movie.model';
import { TVShowModel } from 'src/app/shared/models/tvshow.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [] as any [];
  movies = [] as MovieModel[];
  tvshows = [] as TVShowModel[];
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  coverUrl = '';
  tvshow = new TVShowModel();
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.getAllTopRatedSeries();
    this.getAllTrendingMovies();
  }

  getAllTrendingMovies() {
    this.contentService.getMovies().subscribe(
      (data: any) => {
        this.movies = data.movies;
        data.movies.forEach(m => this.images.push({path: this.baseImageUrl + m.poster_path}));
      }, (error) => console.log(error),
      () => {
      }
    );
  }

  getAllTopRatedSeries() {
    this.contentService.getTvShows().subscribe(
      (data: any) => {
        this.tvshows = data.tvshows;
        this.tvshow = data.tvshows[0];
        this.coverUrl = this.baseImageUrl + data.tvshows[0].backdrop_path;
      }, (error) => console.log(error)
    );
  }

}
