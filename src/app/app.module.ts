import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { StickerComponent } from './sticker/sticker.component';
import { DraggableDirective } from './shared/draggable.directive';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    WhiteboardComponent,
    StickerComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
