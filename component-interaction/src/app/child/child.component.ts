import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  template: `
    <h2>{{"Hello from child component > " + name}}</h2>
    <button (click)="fireEvent()"></button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Data from child component");
  }

}
