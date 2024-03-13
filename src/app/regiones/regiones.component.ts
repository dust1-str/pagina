import { Component, OnInit } from '@angular/core';
import { RegionService } from '../Core/Services/region.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-regiones',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './regiones.component.html',
  styleUrl: './regiones.component.css'
})
export class RegionesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Pais'];
  updateRoute: string = '/regiones/update/';
  createRoute: string = '/regiones/create'; 
  deleteRoute: string = '/regiones/';
  backRoute: string = '/regiones';  

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.regionService.obtenerElemento().subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        console.error('Error al obtener regiones', error);
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
