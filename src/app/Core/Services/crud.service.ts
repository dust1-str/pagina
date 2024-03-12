import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  update(endpoint: string, id: number, Nombre: string ): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint + id;
    return this.http.put<any>(fullUrl, { Nombre });
  }

  create(endpoint: string, Nombre: string): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint
    return this.http.post<any>(fullUrl, { Nombre });
  }
}
