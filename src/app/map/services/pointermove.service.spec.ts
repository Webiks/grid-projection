import { TestBed } from '@angular/core/testing';

import { PointermoveService } from './pointermove.service';

describe('PointermoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointermoveService = TestBed.get(PointermoveService);
    expect(service).toBeTruthy();
  });
});
