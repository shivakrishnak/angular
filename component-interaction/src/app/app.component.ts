import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "shiva krishna from parent component";
  public message = "";

  title = 'component-interaction';
}
