import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { SkyHeroHeadingComponent } from './hero-heading.component';

describe('SkyHeroHeadingComponent', () => {
  let component: SkyHeroHeadingComponent;
  let fixture: ComponentFixture<SkyHeroHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SkyHeroHeadingComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyHeroHeadingComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
