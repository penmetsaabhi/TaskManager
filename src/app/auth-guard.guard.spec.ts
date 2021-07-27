import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard, AuthGuardTask } from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

describe('AuthGuardTask', () => {
  let guard: AuthGuardTask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardTask);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});