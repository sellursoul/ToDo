import {Component} from '@angular/core';
import {visitAll} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0
  updatedAt?: number



  negativeCounters() {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now()
    this.counter++
  }

  decrease(): void {
    this.updatedAt = Date.now()
    this.counter--
  }

  reset(): void {
    this.updatedAt = Date.now()
    this.counter = 0
  }
}
