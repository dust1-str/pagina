import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegionService } from '../Core/Services/region.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { EventSourcePolyfill } from 'event-source-polyfill';


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
  private eventSource!: EventSourcePolyfill;
  private timerId: any;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

    this.timerId = setTimeout(() => {
      console.log('Iniciando conexión SSE')
      this.startSSE();
    }, 3000);
  }

  ngOnDestroy() {
    this.eventSource.close();
    clearTimeout(this.timerId);
    this.startSSE()
  }

 startSSE(): void {
    this.eventSource = new EventSourcePolyfill('http://127.0.0.1:8000/api/sse');
    let reconnectInterval = 3000; 

    this.eventSource.onmessage = event => {
      const data = JSON.parse(event.data);
      console.log('Modificaciones en la tabla:', data);

      if (data == true) {
        this.eventSource.close();
    
        this.obtenerDatos();
    
        this.timerId = setTimeout(() => {
          console.log('Reconectando SSE...')
          this.startSSE();
        }, reconnectInterval);
      }
    };

    this.eventSource.onerror = error => {
      console.warn('Error en la conexión SSE:', error);
      this.eventSource.close();

      this.timerId = setTimeout(() => {
        console.log('Reconectando SSE...')
        this.startSSE();
      }, reconnectInterval);
    };
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
