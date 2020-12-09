import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from "./config.js";

const baseUrl = `${PATH}/rooms`;

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(baseUrl);
  }

  findOne(id){
    return this.http.get(`${baseUrl}/${id}`);
  }

}