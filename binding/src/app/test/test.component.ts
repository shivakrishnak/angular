import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "shiva krishna";
  constructor() { }

  ngOnInit(): void {
  }

}
