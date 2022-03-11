import { TestBed } from '@angular/core/testing';

import { UiAccordionService } from './ui-accordion.service';

describe('UiAccordionService', () => {
  let service: UiAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
