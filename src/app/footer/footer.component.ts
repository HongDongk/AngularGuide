import { Component } from '@angular/core';

// 컴포넌트 클래스임을 명시
@Component({
  selector: 'app-footer', // 다른 html파일에서 <app-footer></app-footer>로 사용가능
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
