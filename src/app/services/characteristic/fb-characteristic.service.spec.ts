import { TestBed } from '@angular/core/testing';

import { FbCharacteristicService } from './fb-characteristic.service';

describe('FbCharacteristicService', () => {
  let service: FbCharacteristicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbCharacteristicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
