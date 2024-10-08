import { TestBed } from '@angular/core/testing';

import { StatutMessageService } from './statut-message.service';

describe('StatutMessageService', () => {
  let service: StatutMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatutMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
