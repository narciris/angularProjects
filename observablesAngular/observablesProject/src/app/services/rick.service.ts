import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  private URL = "https://rickandmortyapi.com/api/character";

  constructor(private http : HttpClient) {

   }

   getCharacter() : Observable<any>{
    return this.http.get(this.URL);
   }
}
