import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `
  <h3 *ngIf="displayIt">Print if true</h3>
  <h3 *ngIf="false">Print if false</h3>

    <h2 *ngIf="displayName; else elseBlock">
      Shiva
    </h2>
   <ng-template #elseBlock>
      <h2>
          krishna
      </h2>
   </ng-template>

   <h2 *ngIf="displayName; then thenBlock else elseBlock2"></h2>
   <ng-template #thenBlock>
      <h2>Then Block</h2>
   </ng-template>
   <ng-template #elseBlock2>
      <h2>Else Block</h2>
   </ng-template>
  `,
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  public displayIt = true;
  public displayName = false;

  constructor() { }

  ngOnInit(): void {
  }

}
