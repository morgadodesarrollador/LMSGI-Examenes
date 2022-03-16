import { TestBed } from '@angular/core/testing';

import { JmvpLibrosService } from './jmvp-libros.service';

describe('JmvpLibrosService', () => {
  let service: JmvpLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JmvpLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
