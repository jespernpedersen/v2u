import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PATH } from './config';

const baseUrl = `${PATH}/users`;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  update(user){
    return this._http.put(`${baseUrl}`, user);
  }

  get(id){
    return this._http.get(`${baseUrl}/${id}`);
  }

}
