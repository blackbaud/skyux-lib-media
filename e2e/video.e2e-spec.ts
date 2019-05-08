import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Video', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/video');
  });

  it('should match previous screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');

    expect('.sky-video-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'video-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-video-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'video-xs'
    });
  });
});
