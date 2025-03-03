import { TestBed } from '@angular/core/testing';

import { LtfUtilsService } from './ltf-utils.service';

describe('LtfUtilsService', () => {
  let service: LtfUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LtfUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
