import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = `${environment.API_BASE_URL}/paises`;

  constructor(private http: HttpClient) { }

  obtenerEmpleados(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }
}