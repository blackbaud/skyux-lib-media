import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { SkyHeroSubheadingComponent } from './hero-subheading.component';

describe('SkyHeroSubheadingComponent', () => {
  let component: SkyHeroSubheadingComponent;
  let fixture: ComponentFixture<SkyHeroSubheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SkyHeroSubheadingComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyHeroSubheadingComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
