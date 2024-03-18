import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  private _loginSuccessful = new Subject<void>();
  loginSuccessful = this._loginSuccessful.asObservable();

  emitLoginSuccessful() {
    this._loginSuccessful.next();
  }

  logout(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/logout';
    return this.http.post<any>(url, {});
  }

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

  createCiudad(Nombre: string, RegionIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades'
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.post<any>(url, { Nombre, RegionID });
  }

  createDistrito(Nombre: string, CiudadIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos'
    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.post<any>(url, { Nombre, CiudadID });
  }

  createBarrio(Nombre: string, DistritoIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios';
    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.post<any>(url, { Nombre, DistritoID });
  }

  createCalle(Nombre: string, BarrioIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles';
    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.post<any>(url, { Nombre, BarrioID });
  }

  createEdificio(Nombre: string, CalleIDstring: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios';
    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.post<any>(url, { Nombre, CalleID });
  }

  createInquilino(Nombre: string, Apellido: string, Telefono: string, Email: string, Cedula: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/inquilinos';
    return this.http.post<any>(url, { Nombre, Apellido, Telefono, Email, Cedula });
  }

  createApartamento(Nombre: string, Descripcion: string, EdificioIDstring: string, Estado: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/apartamentos';
    const EdificioID = parseInt(EdificioIDstring, 10);
    return this.http.post<any>(url, { Nombre, EdificioID, Descripcion, Estado });
  }

  createContrato(Fecha_Inicio: string, Fecha_Final: string, InquilinoIDstring: string, ApartamentoIDstring: string, Mont: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/contratoAlquilers';
    const InquilinoID = parseInt(InquilinoIDstring, 10);
    const ApartamentoID = parseInt(ApartamentoIDstring, 10);
    const Monto = parseFloat(Mont);
    return this.http.post<any>(url, { Fecha_Inicio, Fecha_Final, Monto, InquilinoID, ApartamentoID });
  }

  updateContrato(Fecha_Inicio: string, Fecha_Final: string, InquilinoIDstring: string, ApartamentoIDstring: string, Mont: string, id: number): Observable<any> {
    console.log(Fecha_Inicio, Fecha_Final, InquilinoIDstring, ApartamentoIDstring, Mont, id);
    const url = 'http://127.0.0.1:8000/api/auth/contratoAlquilers/' + id;
    const InquilinoID = parseInt(InquilinoIDstring, 10);
    const ApartamentoID = parseInt(ApartamentoIDstring, 10);
    const Monto = parseFloat(Mont);
    return this.http.put<any>(url, { Fecha_Inicio, Fecha_Final, Monto, InquilinoID, ApartamentoID });
  }

  updateRegion(Nombre: string, PaisIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones/' + id;
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.put<any>(url, { Nombre, PaisID });
  }

  updateCiudad(Nombre: string, RegionIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades/' + id;
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.put<any>(url, { Nombre, RegionID });
  }

  updateDistrito(Nombre: string, CiudadIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos/' + id;
    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.put<any>(url, { Nombre, CiudadID });
  }

  updateBarrio(Nombre: string, DistritoIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios/' + id;
    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.put<any>(url, { Nombre, DistritoID });
  }
  
  updateCalle(Nombre: string, BarrioIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles/' + id;
    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.put<any>(url, { Nombre, BarrioID });
  }

  updateEdificio(Nombre: string, CalleIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios/' + id;
    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.put<any>(url, { Nombre, CalleID });
  }

  updateInquilino(Nombre: string, Apellido: string, Telefono: string, Email: string, Cedula: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/inquilinos/' + id;
    return this.http.put<any>(url, { Nombre, Apellido, Cedula, Telefono, Email });
  }

  updateApartamento(Nombre: string, Descripcion: string, EdificioIDstring: string, Estado: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/apartamentos/' + id;
    const EdificioID = parseInt(EdificioIDstring, 10);
    return this.http.put<any>(url, { Nombre, EdificioID, Descripcion, Estado });
  }

  updateUsuario(name: string, email: string, RoleIDstring: string, id: number): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/usuarios/' + id;
    const role_id = parseInt(RoleIDstring, 10);
    return this.http.put<any>(url, { name, email, role_id });
  }

  getRegiones(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones';
    return this.http.get<any>(url);
  }

  getCiudades(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades';
    return this.http.get<any>(url);
  }

  getDistritos(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos';
    return this.http.get<any>(url);
  }

  getBarrios(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios';
    return this.http.get<any>(url);
  }

  getCalles(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles';
    return this.http.get<any>(url);
  }

  getEdificios(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios';
    return this.http.get<any>(url);
  }

  getInquilinos(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/inquilinos';
    return this.http.get<any>(url);
  }

  getApartamentos(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/apartamentos';
    return this.http.get<any>(url);
  }

  getApartamentosDisponibles(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/apartamentosDisponibles';
    return this.http.get<any>(url);
  }

  getRoles(): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/roles';
    return this.http.get<any>(url);
  }

  getUsuario(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/usuarios/' + id;
    return this.http.get<any>(url);
  }

  getPais(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/paises/' + id;
    return this.http.get<any>(url);
  }

  getRegion(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/regiones/' + id;
    return this.http.get<any>(url);
  }

  getCiudad(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/ciudades/' + id;
    return this.http.get<any>(url);
  }

  getDistrito(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/distritos/' + id;
    return this.http.get<any>(url);
  }

  getBarrio(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/barrios/' + id;
    return this.http.get<any>(url);
  }

  getCalle(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/calles/' + id;
    return this.http.get<any>(url);
  }

  getEdificio(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/edificios/' + id;
    return this.http.get<any>(url);
  }

  getApartamento(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/apartamentos/' + id;
    return this.http.get<any>(url);
  }

  getContrato(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/contratoAlquilers/' + id;
    return this.http.get<any>(url);
  }

  getInquilino(id: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/auth/inquilinos/' + id;
    return this.http.get<any>(url);
  }
}
