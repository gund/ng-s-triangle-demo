import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DotComponent } from './dot/dot.component';
import { STriangleComponent } from './s-triangle/s-triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    DotComponent,
    STriangleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
