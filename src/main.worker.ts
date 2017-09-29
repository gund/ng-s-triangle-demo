import { enableProdMode } from '@angular/core';
import { bootstrapWorkerUi } from '@angular/platform-webworker';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('worker.bundle.js')
  .catch(err => console.log(err));
