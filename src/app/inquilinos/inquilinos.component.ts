import { Component, OnInit } from '@angular/core';
import { InquilinosService } from '../Core/Services/inquilinos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inquilinos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './inquilinos.component.html',
  styleUrl: './inquilinos.component.css'
})
export class InquilinosComponent implements OnInit{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Apellido', 'Telefono', 'Email','Cedula']; 
  updateRoute: string = '/inquilinos/update/';
  createRoute: string = '/inquilinos/create';
  deleteRoute: string = '/inquilinos/';
  backRoute: string = '/inquilinos';
  rol_user: string = "3";

  constructor(private inquilinosService: InquilinosService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.inquilinosService.obtenerElemento().subscribe(
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
