import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccordionTabComponent } from './ui-accordion-tab.component';

describe('UiAccordionTabComponent', () => {
  let component: UiAccordionTabComponent;
  let fixture: ComponentFixture<UiAccordionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAccordionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
