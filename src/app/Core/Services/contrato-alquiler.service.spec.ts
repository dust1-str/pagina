import { TestBed } from '@angular/core/testing';

import { ContratoAlquilerService } from './contrato-alquiler.service';

describe('ContratoAlquilerService', () => {
  let service: ContratoAlquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoAlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
