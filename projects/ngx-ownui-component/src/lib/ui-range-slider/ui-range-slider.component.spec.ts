import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRangeSliderComponent } from './ui-range-slider.component';

describe('UiRangeSliderComponent', () => {
  let component: UiRangeSliderComponent;
  let fixture: ComponentFixture<UiRangeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiRangeSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
