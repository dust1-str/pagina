import { Injectable } from '@angular/core';
import { PaisesService } from './paises.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceFactoryService {

  constructor(private paisesService: PaisesService) { }

  getPaisesService() {
    return this.paisesService;
  }
  
}
