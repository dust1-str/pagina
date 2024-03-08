import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/user/register';
    return this.http.post<any>(url, { name, email, password });
  }
}
