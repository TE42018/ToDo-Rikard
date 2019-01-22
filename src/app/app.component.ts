import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todo app';

  add: boolean;

  constructor () {
  }

  onAdd() {
    this.add = true;
  }
}

