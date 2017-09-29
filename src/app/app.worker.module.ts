import { NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';

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
    WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
