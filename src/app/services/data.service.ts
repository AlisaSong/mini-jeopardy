import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Clue } from '../models/clue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://www.jservice.io/api/clues';
  private category = '25';
  private maxDate = '1996-01-01T00:00:00.000Z';
  private minDate = '1996-12-31T23:59:59.999Z';

  constructor(private http: HttpClient) { }

  public async getData(value: string): Promise<Clue[]> {
    const clues = await this.http.get<Clue[]>(this.baseUrl, {
      params: {
        category: this.category,
        maxDate: this.maxDate,
        minDate: this.minDate,
        value,
      }
    }).toPromise();
    console.log(clues);
    return clues;
  }

}
