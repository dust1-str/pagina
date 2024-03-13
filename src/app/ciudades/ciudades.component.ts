import { Component, OnInit } from '@angular/core';
import { CiudadesService } from '../Core/Services/ciudades.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './ciudades.component.html',
  styleUrl: './ciudades.component.css'
})

export class CiudadesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Region']; 
  updateRoute: string = '/ciudades/update/';
  createRoute: string = '/ciudades/create';
  deleteRoute: string = '/ciudades/';
  backRoute: string = '/ciudades';

  constructor(private ciudadesService: CiudadesService) { }

  ngOnInit(): void {
    this.obtenerDatos();

  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.ciudadesService.obtenerElemento().subscribe(
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
