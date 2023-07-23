import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter(); // 부모컴포넌트(secion)에 데이터 전달

  alarm($event: MouseEvent) {
    window.alert('경고');
  }

  start() {
    this.clickEvent.emit('스타트'); // 부모컴포넌트(secion)에 데이터 전달
  }
}
