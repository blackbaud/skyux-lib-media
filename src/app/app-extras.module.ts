import {
  NgModule
} from '@angular/core';

import {
  SkyImageModule,
  SkyVideoModule
} from './public';

@NgModule({
  imports: [],
  exports: [
    SkyImageModule,
    SkyVideoModule
  ]
})
export class AppExtrasModule { }
