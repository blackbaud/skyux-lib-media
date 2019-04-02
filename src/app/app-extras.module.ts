import {
  NgModule
} from '@angular/core';

import {
  SkyImageModule
} from './public';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    SkyImageModule
  ],
  exports: [
    AppSkyModule,
    SkyImageModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
