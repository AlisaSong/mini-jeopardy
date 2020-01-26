import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Clue } from 'src/app/models/clue';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public clues: Clue[];

  private values: string[] = ['100', '200', '300', '400', '500'];

  constructor(
    private data: DataService,
    private message: MessagingService,
  ) {
    this.clues = [];
  }

  public async ngOnInit() {
    for (const value of this.values) {
      await this.data.getData(value);
      this.clues.push(this.data.getRandomClue(value));
    }
  }

  public showClue(clue: Clue): void {
    if(clue.answered) {
      return;
    }

    clue.answered = true;
    this.message.setClue(clue);
  }
}
