import { TestBed } from '@angular/core/testing';

import { TypeOrganisationService } from './type-organisation.service';

describe('TypeOrganisationService', () => {
  let service: TypeOrganisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOrganisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
