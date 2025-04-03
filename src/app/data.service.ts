import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Area from './interfaces/area.interface';
import Thing from './interfaces/thing.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.apiUrl}/areas`);
  }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(`${this.apiUrl}/things`);
  }
}
