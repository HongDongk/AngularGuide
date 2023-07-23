import { Component } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent {
  test = 0; // 컴포넌트에서 템플릿으로 단방향 데이터 바인딩

  constructor() {
    setInterval(() => {
      this.test++;
    }, 100000);
  }
}
