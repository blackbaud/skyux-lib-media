import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Hero', () => {
  it('should match previous screenshot', (done) => {
    SkyHostBrowser.get('visual/hero');
    SkyHostBrowser.setWindowBreakpoint('lg');
    expect('.sky-hero-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'hero-lg'
    });
  });

  it('should match previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/hero');
    SkyHostBrowser.setWindowBreakpoint('xs');
    expect('.sky-hero-visual').toMatchBaselineScreenshot(done, {
      screenshotName: 'hero-xs'
    });
  });
});
