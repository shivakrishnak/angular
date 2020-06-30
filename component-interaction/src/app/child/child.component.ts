import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>{{"Data from parent component > " + name}}</h2>
    <button (click)="fireEvent()">Click to push data from child to parent component</button>
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
