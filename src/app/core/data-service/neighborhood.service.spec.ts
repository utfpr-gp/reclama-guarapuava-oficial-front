import { TestBed, inject } from '@angular/core/testing';

import { NeighborhoodService } from './neighborhood.service';

describe('NeighborhoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeighborhoodService]
    });
  });

  it('should be created', inject([NeighborhoodService], (service: NeighborhoodService) => {
    expect(service).toBeTruthy();
  }));
});
