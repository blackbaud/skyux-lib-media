import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Image', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/image');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-image-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/image');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-image-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-xs'
    });
  });
});
