import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
})
export class FibonacciComponent {
  fibNumber: number;
  fibonacciSeries = [];

  constructor() {}

  generateFibonacci() {
    this.fibonacciSeries = [0, 1];
    for (let i = 2; i <= this.fibNumber; i++) {
      this.fibonacciSeries.push(
        this.fibonacciSeries[i - 1] + this.fibonacciSeries[i - 2]
      );
    }
    return this.fibonacciSeries;
  }
}
