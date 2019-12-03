import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateOnlyMainPageGuard } from './can-activate-only-main-page-guard.service';

describe('CanActivateOnlyMainPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateOnlyMainPageGuard]
    });
  });

  it('should ...', inject([CanActivateOnlyMainPageGuard], (guard: CanActivateOnlyMainPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
