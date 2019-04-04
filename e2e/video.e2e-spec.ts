import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Image', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/video');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-video-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'video-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/video');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-video-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'video-xs'
    });
  });
});
