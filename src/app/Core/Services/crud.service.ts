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

  create(endpoint: string, Nombre: string, foreignKey: string = ''): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint
    if (foreignKey != '') {
      return this.http.post<any>(fullUrl, { Nombre, foreignKey });
    }
    return this.http.post<any>(fullUrl, { Nombre });
  }
  
  eliminar(endpoint: string, id: number): Observable<any> {
    const fullUrl = 'http://127.0.0.1:8000/api/auth' + endpoint + id;
    return this.http.delete<any>(fullUrl);
  }

  getPaises(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/paises';
    return this.http.get<any>(url);
  }

  createRegion(Nombre: string, PaisIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones'
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.post<any>(url, { Nombre, PaisID });
  }

  updateRegion(Nombre: string, PaisIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones/' + id;
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.put<any>(url, { Nombre, PaisID });
  }
}
