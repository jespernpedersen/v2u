import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from "../config.js";

const baseUrl = `${PATH}/change`;

@Injectable()
export class ChangeRequestService {

  constructor(private http: HttpClient) { }

  post(data) {
    return this.http.post(baseUrl, data); 
  }
  get(data) {
    return this.http.get(baseUrl, data);
  }
}