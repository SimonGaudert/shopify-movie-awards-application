
import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = "https://www.omdbapi.com";
  private apiKey = "5b0340b3"; // Stored here for ease of use. Ideally this would not be stored here.
  private mediaType = "movie"; //We only want movies

  constructor(private http: HttpClient) { }

  getMoviesByTitleSearch(searchValue: string){
    const params = new HttpParams()
    .set('apiKey', this.apiKey)
    .set('type', this.mediaType)
    .set('s', searchValue)
    .set('r', 'json');

    return this.http.get(this.url, {params});
  }

  getMoviesByID(id: string){
    const params = new HttpParams()
    .set('apiKey', this.apiKey)
    .set('type', this.mediaType)
    .set('i', id)
    .set('r', 'json');

    return this.http.get(this.url, {params});
  }
}
