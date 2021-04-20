import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  dataURL = 'http://agl-developer-test.azurewebsites.net/people.json';
  constructor(private http: HttpClient) {}

  getPets(): Observable<Person[]> {
    return this.http.get<Person[]>(this.dataURL);
  }
}
