import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private mainUrl = "http://localhost:8080/api/user"

  getUsers() {
    return this.http.get<any[]>(this.mainUrl);
  }
}
