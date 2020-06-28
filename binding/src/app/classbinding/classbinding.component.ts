import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2 class="text-success">Class Binding</h2>
  <h2 [class] = "successClass" >Class Binding</h2>
  <h2 class="text-special" [class] = "successClass">Class Binding</h2>
  <h2 [class.text-danger] = "hasError" >Class Binding</h2>
  <h2 bind-class.text-danger = "hasError" >Class Binding</h2>
  <h2 [ngClass] = "messageClasses">Class Binding</h2>
  `,
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  public name = "shiva";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
