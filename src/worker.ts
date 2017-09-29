import 'polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { AppModule } from './app/app.worker.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformWorkerAppDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
