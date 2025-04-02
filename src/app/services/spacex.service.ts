import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v4/launches'; // SpaceX API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all missions
  getMissions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Fetch missions filtered by year
  getFilteredMissions(year: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?launch_year=${year}`);
  }

  // Fetch details of a specific mission by flight number
  getMissionDetails(flightNumber: number): Observable<any> {
    const missionUrl = `${this.apiUrl}/${flightNumber}`; // Assuming flightNumber is a valid parameter
    return this.http.get<any>(missionUrl);
  }
}
