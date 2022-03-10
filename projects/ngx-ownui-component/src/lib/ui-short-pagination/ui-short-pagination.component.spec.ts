import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShortPaginationComponent } from './ui-short-pagination.component';

describe('UiShortPaginationComponent', () => {
  let component: UiShortPaginationComponent;
  let fixture: ComponentFixture<UiShortPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiShortPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiShortPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
