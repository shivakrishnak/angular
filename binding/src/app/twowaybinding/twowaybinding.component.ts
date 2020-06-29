import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
    `,
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  public name = "";
  constructor() { }

  ngOnInit(): void {
  }

}
