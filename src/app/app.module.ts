import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  // Component를 사용하려면 하나의 모듈에만 등록이 되야한다.
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent],
  // js export와 같은 기능
  exports: [],
})
export class AppModule {}
