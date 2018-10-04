import { TestBed, async, inject } from '@angular/core/testing';

import { Auth.AdminGuard } from './auth.admin.guard';

describe('Auth.AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.AdminGuard]
    });
  });

  it('should ...', inject([Auth.AdminGuard], (guard: Auth.AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
