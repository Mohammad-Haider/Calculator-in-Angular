import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Welcome to My Calculator';

  first_value = 0;
  second_value = 0;
  answer = 0;

  getDataFromBox1(data_from_box1: number) {
    this.first_value = data_from_box1;
  }

  getDataFromBox2(data_from_box2: number) {
    this.second_value = data_from_box2;
  }

  addNumbers() {
    this.answer = this.first_value + this.second_value;
  }

  subtractNumbers() {
    this.answer = this.first_value - this.second_value;
  }

  divideNumbers() {
    this.answer = this.first_value / this.second_value;
  }

  multiplyNumbers() {
    this.answer = this.first_value * this.second_value;
  }
}
