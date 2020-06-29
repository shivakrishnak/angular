import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <div [ngSwitch]="color">
        <h2 *ngSwitchCase="'red'">you picked red color</h2>
        <h2 *ngSwitchCase="'blue'">you picked blue color</h2>
        <h2 *ngSwitchCase="'green'">you picked green color</h2>
        <h2 *ngSwitchDefault>Pick Again!</h2>
    </div>
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  public color="ered";

  constructor() { }

  ngOnInit(): void {
  }

}
