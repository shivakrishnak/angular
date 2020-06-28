import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { DatainterpolationComponent } from './datainterpolation/datainterpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    DatainterpolationComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
