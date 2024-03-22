import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  private apiUrl = `${environment.API_BASE_URL}/apartamentos`;

  constructor(private http: HttpClient) { }

  obtenerElemento(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }}
