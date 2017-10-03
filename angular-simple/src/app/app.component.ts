import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timestamps: Array<Date> = [];

  addDate() {
    this.timestamps.push(new Date());
  }
}
