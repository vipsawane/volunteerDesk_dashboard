import { TestBed } from '@angular/core/testing';

import { DetailsEvenementService } from './details-evenement.service';

describe('DetailsEvenementService', () => {
  let service: DetailsEvenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsEvenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
