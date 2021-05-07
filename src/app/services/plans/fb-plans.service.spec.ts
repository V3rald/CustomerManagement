import { TestBed } from '@angular/core/testing';

import { FbPlansService } from './fb-plans.service';

describe('FbPlansService', () => {
  let service: FbPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
