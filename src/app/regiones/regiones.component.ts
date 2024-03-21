import { Component, OnInit } from '@angular/core';
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

export class RegionesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Pais'];
  updateRoute: string = '/regiones/update/';
  createRoute: string = '/regiones/create'; 
  deleteRoute: string = '/regiones/';
  backRoute: string = '/regiones';  
  rol_user: string = "3";
  catalogo: boolean = true;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

    setTimeout(() => {
      console.log('Iniciando conexión SSE')
      this.startSSE();

    }, 3000);
  }

 startSSE(): void {
    const eventSource = new EventSourcePolyfill('http://127.0.0.1:8000/api/sse');
    let reconnectInterval = 3000; 

    eventSource.onmessage = event => {
      const data = JSON.parse(event.data);
      console.log('Modificaciones en la tabla:', data);

      if (data == true) {
        eventSource.close();
    
        this.obtenerDatos();
    
        setTimeout(() => {
          console.log('Reconectando SSE...')
          this.startSSE();
        }, reconnectInterval);
      }
    };

    eventSource.onerror = error => {
      console.warn('Error en la conexión SSE:', error);
      eventSource.close();

      setTimeout(() => {
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
