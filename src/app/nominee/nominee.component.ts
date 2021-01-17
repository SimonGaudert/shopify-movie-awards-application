import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent implements OnInit {

  @Input() movie: any;
  @Output() movieDeletedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getMovieSite(imdbID: string){
    return 'https://www.imdb.com/title/'+imdbID;
  }

  deleteMovie(id: string){
    this.movieDeletedEvent.emit(id);
  }

}
