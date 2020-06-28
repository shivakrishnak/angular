import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <button (click)="onClickMe()">Click me!</button>
  {{clickMessage}}

  <button (click)="onClick($event)">Greet</button>
  <b>{{greeting}}</b>

  <button (click)="greeting='Welcome User'">Greet me!</button>

  <input #myId type="text">
  <button (click)="logMessage(myId.value)">Log</button>
  <b>{{"your message is " + message}}
  `
})
export class EventbindingComponent implements OnInit {

  public name = "shiva";
  public greeting = "";
  public clickMessage = '';
  public message = "";

  constructor() { }
  ngOnInit(): void {  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  onClick(event) {
    console.log(event);
    this.greeting = "Welcome to angular :" + event.type;
  }

  logMessage(value){
    this.message = value;
  }
}
