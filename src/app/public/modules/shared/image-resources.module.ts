import {
  NgModule
} from '@angular/core';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

import {
  SkyImageResourcesProvider
} from '../../plugin-resources/image-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: SkyImageResourcesProvider,
    multi: true
  }]
})
export class SkyImageResourcesModule { }
