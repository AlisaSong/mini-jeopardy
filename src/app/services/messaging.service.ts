import { Injectable } from '@angular/core';
import { Clue } from '../models/clue';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  public currentClue: Clue;

  constructor() { }

  public setClue(clue: Clue): void {
    this.currentClue = clue;
  }
}
