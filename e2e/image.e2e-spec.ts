import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('Image', () => {
  beforeEach(() => {
    SkyHostBrowser.get('visual/image');
  });

  it('should match previous default caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-default-caption');

    expect('#sky-image-default-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-default-caption-lg'
    });
  });

  it('should match previous default caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-default-caption');

    expect('#sky-image-default-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-default-caption-xs'
    });
  });

  it('should match previous success caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-success-caption');

    expect('#sky-image-success-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-success-caption-lg'
    });
  });

  it('should match previous success caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-success-caption');

    expect('#sky-image-success-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-success-caption-xs'
    });
  });

  it('should match previous danger caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-danger-caption');

    expect('#sky-image-danger-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-danger-caption-lg'
    });
  });

  it('should match previous danger caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-danger-caption');

    expect('#sky-image-danger-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-danger-caption-xs'
    });
  });

  it('should match previous warning caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-warning-caption');

    expect('#sky-image-warning-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-warning-caption-lg'
    });
  });

  it('should match previous warning caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-warning-caption');

    expect('#sky-image-warning-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-warning-caption-xs'
    });
  });

  it('should match previous info caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-info-caption');

    expect('#sky-image-info-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-info-caption-lg'
    });
  });

  it('should match previous info caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-info-caption');

    expect('#sky-image-info-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-info-caption-xs'
    });
  });

  it('should match previous show border screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-show-border');

    expect('#sky-image-show-border').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-show-border-lg'
    });
  });

  it('should match previous show border screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-show-border');

    expect('#sky-image-show-border').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-show-border-xs'
    });
  });

  it('should match previous no caption screenshot', (done) => {
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#sky-image-no-caption');

    expect('#sky-image-no-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-no-caption-lg'
    });
  });

  it('should match previous no caption screenshot (screen: xs)', (done) => {
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#sky-image-no-caption');

    expect('#sky-image-no-caption').toMatchBaselineScreenshot(done, {
      screenshotName: 'image-no-caption-xs'
    });
  });
});
