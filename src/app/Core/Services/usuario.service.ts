import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from '../Interfaces/objeto';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.API_BASE_URL}/usuarios`;

  constructor(private http: HttpClient) { }

  obtenerElementos(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.apiUrl);
  }
}
