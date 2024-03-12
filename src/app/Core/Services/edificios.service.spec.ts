import { TestBed } from '@angular/core/testing';

import { EdificiosService } from './edificios.service';

describe('EdificiosService', () => {
  let service: EdificiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
