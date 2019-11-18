import { TestBed, async, inject } from '@angular/core/testing';

import { ResolveTripInfoGuard } from './resolve-trip-info.guard';

describe('ResolveTripInfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveTripInfoGuard]
    });
  });

  it('should ...', inject([ResolveTripInfoGuard], (guard: ResolveTripInfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
