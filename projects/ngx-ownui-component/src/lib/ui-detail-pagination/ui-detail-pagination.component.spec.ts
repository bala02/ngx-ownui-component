import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDetailPaginationComponent } from './ui-detail-pagination.component';

describe('UiDetailPaginationComponent', () => {
  let component: UiDetailPaginationComponent;
  let fixture: ComponentFixture<UiDetailPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDetailPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDetailPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
