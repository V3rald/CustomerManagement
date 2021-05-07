import { TestBed } from '@angular/core/testing';

import { FbContactsService } from './fb-contacts.service';

describe('FbContactsService', () => {
  let service: FbContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
