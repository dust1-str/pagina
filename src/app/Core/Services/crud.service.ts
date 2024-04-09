import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

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
    const url = `${environment.API_BASE_URL}/logout`;
    return this.http.post<any>(url, {});
  }

  update(endpoint: string, id: number, Nombre: string ): Observable<any> {
    const fullUrl = environment.API_BASE_URL + endpoint + id;
    return this.http.put<any>(fullUrl, { Nombre });
  }

  create(endpoint: string, Nombre: string, foreignKey: string = ''): Observable<any> {
    const fullUrl =  environment.API_BASE_URL + endpoint
    if (foreignKey != '') {
      return this.http.post<any>(fullUrl, { Nombre, foreignKey });
    }
    return this.http.post<any>(fullUrl, { Nombre });
  }
  
  eliminar(endpoint: string, id: number): Observable<any> {
    const fullUrl = environment.API_BASE_URL + endpoint + id;
    return this.http.delete<any>(fullUrl);
  }

  getPaises(): Observable<any> {
    const url = `${environment.API_BASE_URL}/paises`;
    return this.http.get<any>(url);
  }

  createRegion(Nombre: string, PaisIDstring: string): Observable<any> {
    const url = environment.API_BASE_URL + '/regiones';
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.post<any>(url, { Nombre, PaisID });
  }

  createCiudad(Nombre: string, RegionIDstring: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/ciudades`;
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.post<any>(url, { Nombre, RegionID });
  }

  createDistrito(Nombre: string, CiudadIDstring: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/distritos`;

    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.post<any>(url, { Nombre, CiudadID });
  }

  createBarrio(Nombre: string, DistritoIDstring: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/barrios`;

    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.post<any>(url, { Nombre, DistritoID });
  }

  createCalle(Nombre: string, BarrioIDstring: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/calles`;

    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.post<any>(url, { Nombre, BarrioID });
  }

  createEdificio(Nombre: string, CalleIDstring: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/edificios`;

    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.post<any>(url, { Nombre, CalleID });
  }

  createInquilino(Nombre: string, Apellido: string, Telefono: string, Email: string, Cedula: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/inquilinos`;

    return this.http.post<any>(url, { Nombre, Apellido, Telefono, Email, Cedula });
  }

  createApartamento(Nombre: string, Descripcion: string, EdificioIDstring: string, Estado: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/apartamentos`;

    const EdificioID = parseInt(EdificioIDstring, 10);
    return this.http.post<any>(url, { Nombre, EdificioID, Descripcion, Estado });
  }

  createContrato(Fecha_Inicio: string, Fecha_Final: string, InquilinoIDstring: string, ApartamentoIDstring: string, Mont: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/contratoAlquilers`;

    const InquilinoID = parseInt(InquilinoIDstring, 10);
    const ApartamentoID = parseInt(ApartamentoIDstring, 10);
    const Monto = parseFloat(Mont);
    return this.http.post<any>(url, { Fecha_Inicio, Fecha_Final, Monto, InquilinoID, ApartamentoID });
  }

  updateContrato(Fecha_Inicio: string, Fecha_Final: string, InquilinoIDstring: string, ApartamentoIDstring: string, Mont: string, id: number): Observable<any> {
    console.log(Fecha_Inicio, Fecha_Final, InquilinoIDstring, ApartamentoIDstring, Mont, id);
    const url = `${environment.API_BASE_URL}/contratoAlquilers` + id;
    const InquilinoID = parseInt(InquilinoIDstring, 10);
    const ApartamentoID = parseInt(ApartamentoIDstring, 10);
    const Monto = parseFloat(Mont);
    return this.http.put<any>(url, { Fecha_Inicio, Fecha_Final, Monto, InquilinoID, ApartamentoID });
  }

  updateRegion(Nombre: string, PaisIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/regiones/` + id;
    const PaisID = parseInt(PaisIDstring, 10);
    return this.http.put<any>(url, { Nombre, PaisID });
  }

  updateCiudad(Nombre: string, RegionIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/ciudades/` + id;
    const RegionID = parseInt(RegionIDstring, 10);
    return this.http.put<any>(url, { Nombre, RegionID });
  }

  updateDistrito(Nombre: string, CiudadIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/distritos/` + id;

    const CiudadID = parseInt(CiudadIDstring, 10);
    return this.http.put<any>(url, { Nombre, CiudadID });
  }

  updateBarrio(Nombre: string, DistritoIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/barrios/` + id;

    const DistritoID = parseInt(DistritoIDstring, 10);
    return this.http.put<any>(url, { Nombre, DistritoID });
  }
  
  updateCalle(Nombre: string, BarrioIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/calles/` + id;

    const BarrioID = parseInt(BarrioIDstring, 10);
    return this.http.put<any>(url, { Nombre, BarrioID });
  }

  updateEdificio(Nombre: string, CalleIDstring: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/edificios/` + id;

    const CalleID = parseInt(CalleIDstring, 10);
    return this.http.put<any>(url, { Nombre, CalleID });
  }

  updateInquilino(Nombre: string, Apellido: string, Telefono: string, Email: string, Cedula: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/inquilinos/` + id;

    return this.http.put<any>(url, { Nombre, Apellido, Cedula, Telefono, Email });
  }

  updateApartamento(Nombre: string, Descripcion: string, EdificioIDstring: string, Estado: string, id: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/apartamentos/` + id;

    const EdificioID = parseInt(EdificioIDstring, 10);
    return this.http.put<any>(url, { Nombre, EdificioID, Descripcion, Estado });
  }

  updateUsuario(name: string, email: string, RoleIDstring: string, id: number, is_active: number): Observable<any> {
    const url = `${environment.API_BASE_URL}/usuarios/` + id;
    console.log(name, email, RoleIDstring, id, is_active);
    const role_id = parseInt(RoleIDstring, 10);
    return this.http.put<any>(url, { name, email, role_id, is_active });

  }

  getRegiones(): Observable<any> {
    const url = `${environment.API_BASE_URL}/regiones`;

    return this.http.get<any>(url);
  }

  getCiudades(): Observable<any> {
    const url = `${environment.API_BASE_URL}/ciudades`;

    return this.http.get<any>(url);
  }

  getDistritos(): Observable<any> {
    const url = `${environment.API_BASE_URL}/distritos`;

    return this.http.get<any>(url);
  }

  getBarrios(): Observable<any> {
    const url = `${environment.API_BASE_URL}/barrios`;

    return this.http.get<any>(url);
  }

  getCalles(): Observable<any> {
    const url = `${environment.API_BASE_URL}/calles`;

    return this.http.get<any>(url);
  }

  getEdificios(): Observable<any> {
    const url = `${environment.API_BASE_URL}/edificios`;

    return this.http.get<any>(url);
  }

  getInquilinos(): Observable<any> {
    const url = `${environment.API_BASE_URL}/inquilinos`;

    return this.http.get<any>(url);
  }

  getApartamentos(): Observable<any> {
    const url = `${environment.API_BASE_URL}/apartamentos`;

    return this.http.get<any>(url);
  }

  getApartamentosDisponibles(): Observable<any> {
    const url = `${environment.API_BASE_URL}/apartamentosDisponibles`;

    return this.http.get<any>(url);
  }

  getRoles(): Observable<any> {
    const url = `${environment.API_BASE_URL}/roles`;

    return this.http.get<any>(url);
  }

  getUsuario(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/usuarios/` + id;
    return this.http.get<any>(url);
  }

  getPais(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/paises/` + id;
    return this.http.get<any>(url);
  }

  getRegion(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/regiones/` + id;
    return this.http.get<any>(url);
  }

  getCiudad(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/roles/` + id;
    return this.http.get<any>(url);
  }

  getDistrito(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/distritos/` + id;
    return this.http.get<any>(url);
  }

  getBarrio(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/barrios/` + id;
    return this.http.get<any>(url);
  }

  getCalle(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/calles/` + id;
    return this.http.get<any>(url);
  }

  getEdificio(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/edificios/` + id;
    return this.http.get<any>(url);
  }

  getApartamento(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/apartamentos/` + id;
    return this.http.get<any>(url);
  }

  getContrato(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/contratoAlquilers/` + id;
    return this.http.get<any>(url);
  }

  getInquilino(id: string): Observable<any> {
    const url = `${environment.API_BASE_URL}/inquilinos/` + id;
    return this.http.get<any>(url);
  }
}
