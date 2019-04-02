import {
  NgModule
} from '@angular/core';

import {
  SkyImageModule
} from './modules/image/image.module';

@NgModule({
  exports: [
    SkyImageModule
  ]
})
export class SkyImagesModule { }
