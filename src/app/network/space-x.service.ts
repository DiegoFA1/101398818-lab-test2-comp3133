import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MissionLaunch, Mission } from '../models/mission';


@Injectable({
  providedIn: 'root'
})

export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getMissionList(): Observable<MissionLaunch[]> {
    return this.http.get<MissionLaunch[]>(this.apiUrl);
  }

  getMissionListByFlightNumber(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/${flightNumber}`);
  }

  getMissionListByYear(year: string): Observable<MissionLaunch[]> {
    return this.http.get<MissionLaunch[]>(`${this.apiUrl}?launch_year=${year}`);
  }
}