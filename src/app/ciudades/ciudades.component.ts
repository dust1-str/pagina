import { Component, OnInit } from '@angular/core';
import { CiudadesService } from '../Core/Services/ciudades.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import pusherJs from 'pusher-js';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
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
  rol_user: string = "3";
  catalogo: boolean = true;
  pusher: any;
  method :string = '';

  constructor(private ciudadesService: CiudadesService,private route: ActivatedRoute,private router: Router ) { }
  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    this.iniciarPusher();

    this.route.queryParams.subscribe((params : any) => {
      if (params.method) {
        console.log('Metodo:', params.method);
        this.method = params.method;
        this.router.navigate([], { queryParams: {} });
      }
    });
  }
  
  ngOnDestroy(): void {
    if (this.pusher) {
      this.pusher.disconnect();
    }
  }

  actualizarElementos() 
  { 
    this.ngOnInit(); 
  }
  
  iniciarPusher() {
    this.pusher = new pusherJs('fb2cba6f8134ca70e39a', {
      cluster: 'us3',
      forceTLS: false,
      wsHost: window.location.hostname,
      wsPort: 6001,
      enabledTransports: ['ws']
    });
    let channel = this.pusher.subscribe('channel-ciudad');
    channel.bind('App\\Events\\nuevaCiudad', (data: any) => {
      console.log('Evento recibido:', data);
      this.obtenerDatos();
    });
    this.pusher.connection.bind('connected', () => {
      console.log('Conexión establecida');
    });
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
