import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "https://peercash-qscf.onrender.com/api/peer-cash/auth/login"

  constructor( private http : HttpClient) { 

  }

  login(credentials : {email : string, password : string}){
    return this.http.post<any>(this.URL,credentials);
  }
}
