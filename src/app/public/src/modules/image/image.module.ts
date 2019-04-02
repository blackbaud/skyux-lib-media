import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyImageComponent } from './image.component';

import { SkyI18nModule } from '@skyux/i18n';
import { SkyImageResourcesModule } from '../shared/image-resources.module';

@NgModule({
  declarations: [
    SkyImageComponent
  ],
  imports: [
    CommonModule,
    SkyI18nModule,
    SkyImageResourcesModule
  ],
  exports: [
    SkyImageComponent
  ],
})
export class SkyImageModule { }
