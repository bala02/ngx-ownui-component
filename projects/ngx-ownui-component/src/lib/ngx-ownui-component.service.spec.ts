import { TestBed } from '@angular/core/testing';

import { NgxOwnuiComponentService } from './ngx-ownui-component.service';

describe('NgxOwnuiComponentService', () => {
  let service: NgxOwnuiComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOwnuiComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
