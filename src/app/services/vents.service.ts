import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from "./config.js";

const baseUrl = `${PATH}/vents`;

@Injectable()
export class VentsService {


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getOne(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data); 
  }

  update(data) {
    return this.http.put(`${baseUrl}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);    
  }

  getFromRoom(id){
    return this.http.get(`${baseUrl}/room/${id}`);
  }

  getFromUser(id){
    return this.http.get(`${baseUrl}/user/${id}`);
  }
}