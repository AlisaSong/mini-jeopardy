import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-scorekeeper',
  templateUrl: './scorekeeper.component.html',
  styleUrls: ['./scorekeeper.component.scss']
})
export class ScorekeeperComponent implements OnInit {

  constructor(public message: MessagingService) { }

  ngOnInit() {
  }
}
