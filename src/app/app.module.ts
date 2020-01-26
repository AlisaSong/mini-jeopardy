import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
