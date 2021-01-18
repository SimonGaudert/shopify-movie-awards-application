import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieSaveService {

  constructor(private cookieService: CookieService) { }

  saveNominees(nominess: Movie[]){
    let nomineeString = JSON.stringify(nominess);
    this.cookieService.set('userSavedNominees', nomineeString);
  }

  getNominees(): Movie[]{
    try{
      let nomineeString = this.cookieService.get('userSavedNominees');
      if(nomineeString !== ''){
        return JSON.parse(nomineeString);
      }
    } catch(e){
      console.log("Something went wrong retrieving saved nominations")
    }
    return [];
  }



}
