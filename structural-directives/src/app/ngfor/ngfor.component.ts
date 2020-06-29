import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
      <h2>id | first | last | even | odd | color</h2>
      <div *ngFor="let color of colors; index as indexx; first as firstt; last as lastt; even as evenn; odd as oddd">
          <h2>{{indexx}} | {{firstt}} | {{lastt}} | {{evenn}} | {{oddd}} | {{color}}</h2>
      </div>
  
  `,
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public colors = ["red","blue","green","yellow","white"];

  constructor() { }

  ngOnInit(): void {
  }

}
