import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  update(id: number, Nombre: string ): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/paises/' + id;
    return this.http.put<any>(url, { Nombre });
  }

  create(Nombre: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/paises';
    return this.http.post<any>(url, { Nombre });
  }
}
