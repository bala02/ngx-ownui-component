import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabsetComponent } from './ui-tabset.component';

describe('UiTabsetComponent', () => {
  let component: UiTabsetComponent;
  let fixture: ComponentFixture<UiTabsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTabsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
