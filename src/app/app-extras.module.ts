import {
  NgModule
} from '@angular/core';

import {
  SkyImagesModule
} from './public';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    SkyImagesModule
  ],
  exports: [
    AppSkyModule,
    SkyImagesModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
