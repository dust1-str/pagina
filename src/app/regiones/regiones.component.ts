import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegionService } from '../Core/Services/region.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-regiones',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './regiones.component.html',
  styleUrl: './regiones.component.css'
})

export class RegionesComponent implements OnInit, OnDestroy {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Pais'];
  updateRoute: string = '/regiones/update/';
  createRoute: string = '/regiones/create'; 
  deleteRoute: string = '/regiones/';
  backRoute: string = '/regiones';  
  rol_user: string = "3";
  catalogo: boolean = true;
  private timerId: any;

  constructor(private regionService: RegionService, private ngZone: NgZone) { }
  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    this.startSSE();
    
  }

  ngOnDestroy() {
    clearTimeout(this.timerId);  
  }

 startSSE(): void {

    setTimeout(() => {
      const eventSource = new EventSource('http://192.168.100.84:8000/api/sse');

      eventSource.onmessage = (event) => {
        console.log(event.data);
  
        if(event.data == "true") {
          console.log('Se ha actualizado la tabla')
          eventSource.close();

          this.ngZone.run(() => {
            this.obtenerDatos();
          });
          setTimeout(() => {
            this.startSSE();
          }, 10000);
        }
  
      };
    }, 2000);
  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.regionService.obtenerElemento().subscribe(
      data => {
        this.elementos = data;
        console.log('Regiones obtenidas:', data)
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
