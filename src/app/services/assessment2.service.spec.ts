import { TestBed } from '@angular/core/testing';

import { Assessment2Service } from './assessment2.service';

describe('Assessment2Service', () => {
  let service: Assessment2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Assessment2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
