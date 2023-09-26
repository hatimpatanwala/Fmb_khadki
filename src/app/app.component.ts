import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fmb-khadki';
  tempVariable: boolean = true;
  constructor() {
    // setTimeout(() => {
    //   this.tempVariable = true;
    // }, 5000);
  }
}
