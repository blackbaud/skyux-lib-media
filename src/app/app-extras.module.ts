import {
  NgModule
} from '@angular/core';

import {
  SkyImageModule,
  SkyHeroModule
} from './public';

@NgModule({
  imports: [],
  exports: [
    SkyImageModule,
    SkyHeroModule
  ]
})
export class AppExtrasModule { }
