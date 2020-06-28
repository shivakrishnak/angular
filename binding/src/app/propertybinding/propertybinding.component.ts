import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="krishna"/>
  <input id="{{myId}}" type="text" value="krishna"/>
  <div></div>
  <input disabled type="text" value="shiva"/>
  <input disabled="false" type="text" value="shiva"/>
  <input [disabled]="isDisabled" type="text" value="shiva"/>
  <input bind-disabled="isDisabled" type="text" value="shiva"/>
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public name = "shiva krishna";
  public myId = "testId";
  public isDisabled = "true";
  constructor() { }

  ngOnInit(): void {
  }

}
