import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgSwitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
