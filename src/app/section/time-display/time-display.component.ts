import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData!: string; // 부모컴포넌트(secion)로부터 데이터 받기

  title = '시간'; // 컴포넌트에서 템플릿으로 단방향 데이터 바인딩

  ngOnInit(): void {}

  constructor() {}

  // Input데이터값(inputData)값이 바뀌면 실행 - 컴포넌트여서 사용가능한 함수
  ngOnChanges() {
    console.log('바뀜');
  }
}
