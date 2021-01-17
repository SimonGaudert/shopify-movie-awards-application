import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Movie} from '../models/movie'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() movie: any;
  @Input() nominees: any;
  @Output() movieNominatedEvent: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {

  }

  nominateMovie(movie: Movie){
    this.movieNominatedEvent.emit(movie);
  }

  getMovieSite(imdbID: string){
    return 'https://www.imdb.com/title/'+imdbID;
  }

  isMovieNominated(id: string){
    for(let nominee of this.nominees){
      if (nominee.id == id){
        return true;
      }
    }
    return false;
  }

}
