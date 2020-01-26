import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { ScorekeeperComponent } from './components/scorekeeper/scorekeeper.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    InteractionComponent,
    ScorekeeperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
