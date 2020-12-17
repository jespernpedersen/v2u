import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/views/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(credentials) {
    return this.http.post('http://localhost:8080/vent2u/login', credentials);

  }
}
