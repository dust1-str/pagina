import { Component, OnInit } from '@angular/core';
import { DistritosService } from '../Core/Services/distritos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distritos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './distritos.component.html',
  styleUrl: './distritos.component.css'
})
export class DistritosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Ciudad']; 
  updateRoute: string = '/distritos/update/';
  createRoute: string = '/distritos/create';
  deleteRoute: string = '/distritos/';
  backRoute: string = '/distritos';
  rol_user: string = "3";

  constructor(private distritosService: DistritosService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.distritosService.obtenerElemento().subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        console.error('Error al obtener elementos', error);
      }
    );
  }

  editarElemento(id: number) {
    console.log('Editar elemento con ID:', id);
  }

  eliminarElemento(id: number) {
    console.log('Eliminar elemento con ID:', id);
  }

  agregarElemento(id: number) {
    console.log('se agregara un nuevo elemento ');
  }
}
