import { TestBed } from '@angular/core/testing';

import { MpFiltersLibService } from './mp-filters-lib.service';

describe('MpFiltersLibService', () => {
  let service: MpFiltersLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpFiltersLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
