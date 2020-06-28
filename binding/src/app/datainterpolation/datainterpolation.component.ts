import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datainterpolation',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  `,
  styleUrls: ['./datainterpolation.component.css']
})
export class DatainterpolationComponent implements OnInit {

  public name = "shiva krishna k";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }


}
