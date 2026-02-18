import { TestBed } from '@angular/core/testing';
import { JwtInterceptor } from '../utils/jwt-interceptor';
import { Authentication } from '../services/authentication';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: Authentication, useValue: {} }
      ]
    });

    interceptor = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

