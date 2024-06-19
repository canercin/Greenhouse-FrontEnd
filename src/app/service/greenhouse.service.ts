import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SensorData} from "../chartsbox/SensorDatas";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  constructor(private http: HttpClient) { }

  mainUrl = 'http://localhost:8080/api/greenhouse';

  getDatas() {
    return this.http.get<SensorData[]>(this.mainUrl + '/get');
  }

  getLastData() {
    return this.http.get<SensorData>(this.mainUrl + '/getLastRecord');
  }

  getLastTenData() {
    return this.http.get<SensorData[]>(this.mainUrl + '/getLast10Record');
  }
}
