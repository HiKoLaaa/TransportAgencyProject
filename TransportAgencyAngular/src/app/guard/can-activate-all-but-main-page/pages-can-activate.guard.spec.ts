import { TestBed, async, inject } from '@angular/core/testing';

import { PagesCanActivateGuard } from './pages-can-activate.guard';

describe('PagesCanActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagesCanActivateGuard]
    });
  });

  it('should ...', inject([PagesCanActivateGuard], (guard: PagesCanActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
