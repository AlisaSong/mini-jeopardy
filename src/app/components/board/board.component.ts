import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private values: string[] = ['100', '200', '300', '400', '500']
  constructor(private data: DataService) { }

  ngOnInit() {
    for(const value of this.values) {
      this.data.getData(value);
    }
  }

}
