import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegionService } from '../Core/Services/region.service';

import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-regiones',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
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
  private eventSource: EventSource | null;
  method: string = '';

  constructor(private regionService: RegionService, private ngZone: NgZone,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    this.startSSE();

    this.route.queryParams.subscribe((params : any) => {
      if (params.method) {
        console.log('Metodo:', params.method);
        this.method = params.method;
        this.router.navigate([], { queryParams: {} });
      }
    });
  }

  ngOnDestroy(): void {
    this.stopSSE();
  }


  startSSE(): void {
    this.eventSource = new EventSource('http://127.0.0.1:8000/api/sse');

    this.eventSource.onmessage = (event) => {
    console.log(event.data);

    if(event.data == "true") {

      this.ngZone.run(() => {
        this.obtenerDatos();
      });
    }

  };  
  }

  stopSSE(): void {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
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
