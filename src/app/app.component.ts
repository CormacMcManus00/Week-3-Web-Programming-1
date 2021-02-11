import { Component } from '@angular/core';
import { MovieService } from './myservices/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'movie-list';
  movies:{}[];

  constructor(private myService:MovieService) {}

  ngOnInit() {
    this.movies = this.myService.getMovies();
    console.log(this.movies);
  }
}
