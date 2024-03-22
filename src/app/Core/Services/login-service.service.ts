import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/Login';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/login`;

    return this.http.post<Login>(url, { email, password });
  }

  isAuth(): Observable<any> {
    let url = `${environment.API_BASE_URL}/verificar`;
    return this.http.get<any>(url);
  }

  Auth(email: string): Observable<any> {
    let url = `${environment.Api_Base}autenticar`;

    return this.http.post<any>(url, { email });
  }
}