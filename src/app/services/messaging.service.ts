import { Injectable } from '@angular/core';
import { Clue } from '../models/clue';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  public currentClue: Clue;
  public currentInstruction: string;
  public currentScore = 0;
  public gameOver: boolean;
  public questionsAnswered: number;

  constructor() { }

  public setClue(clue: Clue): void {
    this.currentClue = clue;
    this.currentInstruction = 'Submit your answer below';
  }
}
