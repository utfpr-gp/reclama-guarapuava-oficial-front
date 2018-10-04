import { TestBed, inject } from '@angular/core/testing';

import { AppLoaderService } from './app-loader.service';

describe('AppLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLoaderService]
    });
  });

  it('should be created', inject([AppLoaderService], (service: AppLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
