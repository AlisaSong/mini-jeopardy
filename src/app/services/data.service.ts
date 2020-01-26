import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Clue } from '../models/clue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://www.jservice.io/api/clues';
  private category = '25';
  private cluesCache: Record<string, Clue[]> = {};
  private maxDate = '1996-01-01T00:00:00.000Z';
  private minDate = '1996-12-31T23:59:59.999Z';

  constructor(private http: HttpClient) { }

  public async getData(value: string): Promise<Clue[]> {
    let clues: Clue[] = [];
    try {
      clues = await this.http.get<Clue[]>(this.baseUrl, {
        params: {
          category: this.category,
          maxDate: this.maxDate,
          minDate: this.minDate,
          value,
        }
      }).toPromise();

      this.cluesCache[value] = clues;
    } catch (err) {
      // TODO: Add detailed error message.
      console.log(err);
    }

    return clues;
  }

  public getRandomClue(value: string): Clue {
    const values = this.cluesCache[value];

    if(!values || values.length === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * values.length);
    console.dir(values[randomIndex]);
    return values[randomIndex];
  }
}
