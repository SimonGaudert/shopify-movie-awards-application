import { Component, OnInit, resolveForwardRef } from '@angular/core';

import { MovieService } from './services/movie.service';
import {MovieSaveService} from './services/movie-save.service'
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopify-project';

  searchField: string = '';
  searchResults: Movie[] = [];

  nominees: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private movieSaveService: MovieSaveService
  ) { }

  ngOnInit() {
    //Load favourites from cookies
    this.nominees = this.movieSaveService.getNominees();
    this.searchResults = [];
  }

  searchBarUpdated() {
    this.movieService.getMoviesByTitleSearch(this.searchField).subscribe(
      (response: any) => {
        this.searchResults = []; //Clear search results
        for (let x of response.Search) {
          this.searchResults.push(new Movie(x.imdbID, x.Title, x.Year, x.Poster))
        }
      },
      error => {
        console.log("API call failed");
      }
    );
  }

  handleMovieNominatedEvent(movie: Movie) {
    if (this.nominees.length < 5) {
      this.nominees.push(movie);
    }
    this.movieSaveService.saveNominees(this.nominees);
  }

  handleMovieDeletedEvent(id: string) {
    this.nominees = this.nominees.filter(function (obj) {
      return obj.id !== id;
    });
    this.movieSaveService.saveNominees(this.nominees);
  }

  getNominationPercentage(){
    return (this.nominees.length / 5)*100;
  }

}
