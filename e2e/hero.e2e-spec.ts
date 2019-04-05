import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Hero', () => {
  it('should match previous default hero screenshot', (done) => {
    SkyHostBrowser.get('visual/hero/default');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-hero-default');
    expect('#sky-hero-default').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-hero-default-lg'
    });
  });

  it('should match previous default hero screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/hero/default');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-hero-default');
    expect('#sky-hero-default').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-hero-default-xs'
    });
  });

  it('should match previous hero alternate colors screenshot', (done) => {
    SkyHostBrowser.get('visual/hero/alternate_colors');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-hero-alternate-colors');
    expect('#sky-hero-alternate-colors').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-hero-alternate-lg'
    });
  });

  it('should match previous hero alternate colors screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/hero/alternate_colors');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-hero-alternate-colors');
    expect('#sky-hero-alternate-colors').toMatchBaselineScreenshot(done, {
      screenshotName: 'sky-hero-alternate-xs'
    });
  });

  it('should match previous darker opacity hero screenshot', (done) => {
    SkyHostBrowser.get('visual/hero/darker_opacity');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-hero-darker-opacity');
    expect('#sky-hero-darker-opacity').toMatchBaselineScreenshot(done, {
      screenshotName: '#sky-hero-darker-opacity-lg'
    });
  });

  it('should match previous darker opacity hero screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('visual/hero/darker_opacity');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-hero-darker-opacity');
    expect('#sky-hero-darker-opacity').toMatchBaselineScreenshot(done, {
      screenshotName: '#sky-hero-darker-opacity-xs'
    });
  });
});
