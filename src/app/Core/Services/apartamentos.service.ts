import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {

  private apiUrl = 'http://127.0.0.1:8000/api/auth/apartamentos';

  constructor(private http: HttpClient) { }

  obtenerElemento(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }}
