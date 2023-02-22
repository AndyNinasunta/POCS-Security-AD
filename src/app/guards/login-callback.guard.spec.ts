import { TestBed } from '@angular/core/testing';

import { LoginCallbackGuard } from './login-callback.guard';

describe('LoginCallbackGuard', () => {
  let guard: LoginCallbackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginCallbackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
