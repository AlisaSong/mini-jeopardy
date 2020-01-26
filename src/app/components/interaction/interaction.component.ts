import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  public answer: string;

  constructor(public message: MessagingService) {
  }

  ngOnInit() {
    this.message.currentInstruction = 'Pick a clue!';
    this.message.questionsAnswered = 0;
  }

  public submitAnswer(): void {
    console.log(this.answer);
    if (this.answer === this.message.currentClue.answer) {
      this.message.currentInstruction = 'That\'s correct!, ' + this.message.currentClue.value + ' added to your score!';
      this.message.currentScore += this.message.currentClue.value;
    } else {
      this.message.currentInstruction = 'Wrong answer :( The correct answer was ' +
        this.message.currentClue.answer +
        '. ' +
        this.message.currentClue.value +
        ' subtracted from your score!';

      this.message.currentScore -= this.message.currentClue.value;
    }

    this.message.currentClue.answered = true;
    this.answer = '';
    this.message.questionsAnswered++;

    if (this.message.questionsAnswered === 5) {
      this.message.gameOver = true;
      this.message.currentInstruction = 'Play another game, hit the new game button';
    }
  }

}
