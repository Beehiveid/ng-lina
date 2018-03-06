import { TestBed, inject } from '@angular/core/testing';

import { OutletterService } from './outletter.service';

describe('OutletterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutletterService]
    });
  });

  it('should be created', inject([OutletterService], (service: OutletterService) => {
    expect(service).toBeTruthy();
  }));
});
