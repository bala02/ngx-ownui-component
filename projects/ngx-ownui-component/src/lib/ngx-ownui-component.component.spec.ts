import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwnuiComponentComponent } from './ngx-ownui-component.component';

describe('NgxOwnuiComponentComponent', () => {
  let component: NgxOwnuiComponentComponent;
  let fixture: ComponentFixture<NgxOwnuiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOwnuiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOwnuiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
