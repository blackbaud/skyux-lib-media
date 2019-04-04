import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { SkyVideoModule } from './video.module';

describe('SkyVideoModule', () => {
  it('should export', () => {
    const exportedModule = new SkyVideoModule();
    expect(exportedModule).toBeDefined();
  });
});
