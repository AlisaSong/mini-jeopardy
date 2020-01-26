import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Clue } from 'src/app/models/clue';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public clues: Clue[];

  private values: string[] = ['100', '200', '300', '400', '500'];

  constructor(private data: DataService) {
    this.clues = [];
  }

  public async ngOnInit() {
    for(const value of this.values) {
      await this.data.getData(value);
      this.clues.push(this.data.getRandomClue(value));
    }
  }

}
