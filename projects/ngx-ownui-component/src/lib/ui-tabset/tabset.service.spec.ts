import { TestBed } from '@angular/core/testing';

import { TabsetService } from './tabset.service';

describe('TabsetService', () => {
  let service: TabsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
