// 가장 처음실행되는 루트가 되는 모듈
// 모든 컴포넌트는 모듈에 등록해야함!!
// 사용하고 싶은 컴포넌트들 => 모듈에 declartions, 모듈 export => 그 모듈을 사용할려면 특정모듈에서 그 모듈 import

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
import { RouterModule } from '@angular/router';

@NgModule({
  // 모듈에 컴포넌트를 선언해야 사용가능!(다른모듈에는 동일 컴포넌트 등록 불가능)
  declarations: [AppComponent],

  // 사용하고 싶은 모듈(안에 컴포넌트) 사용할 수 있도록 만들어줌
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
  ],

  // 다른모듈들이 사용할 수 있도록 만들어줌
  exports: [AppComponent],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
