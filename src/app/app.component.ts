import { Component, OnInit, resolveForwardRef } from '@angular/core';

import {MovieService} from './services/movie.service';
import {Movie} from './models/movie';

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

  constructor(private movieService: MovieService ){}

  ngOnInit(){    
    //Load favourites from cookies
    this.searchResults = [];
  }

  searchBarUpdated(){
    this.movieService.getMoviesByTitleSearch(this.searchField).subscribe(
      (response: any) => {     
        this.searchResults = []; //Clear search results
        for(let x of  response.Search){
          this.searchResults.push(new Movie(x.imdbID, x.Title, x.Year, x.Poster))
        }
      },
      error => {
        console.log("API call failed");
      }
    );
  }

  handleMovieNominatedEvent(movie: Movie){
    if(this.nominees.length <5){
      this.nominees.push(movie);
    }
  }

  handleMovieDeletedEvent(id: string){
    this.nominees = this.nominees.filter(function( obj ) {
      return obj.id !== id;
  });
  }

}
