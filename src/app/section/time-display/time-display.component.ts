import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData!: string; // 부모컴포넌트(secion)로부터 데이터 받기

  min: number = 0; // 컴포넌트에서 템플릿으로 단방향 데이터 바인딩
  sec: number = 0; // 컴포넌트에서 템플릿으로 단방향 데이터 바인딩
  ms: number = 0; // 컴포넌트에서 템플릿으로 단방향 데이터 바인딩

  timeInterval: any;

  ngOnInit(): void {}

  constructor() {}

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // Input데이터값(inputData)값이 바뀌면 실행 - 컴포넌트여서 사용가능한 함수
  ngOnChanges(changes: any) {
    for (let propName in changes) {
      if (propName == 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }
      }
    }
  }
}
