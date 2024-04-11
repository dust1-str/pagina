import { Component, OnDestroy, OnInit } from '@angular/core';
import { CallesService } from '../Core/Services/calles.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calles',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './calles.component.html',
  styleUrl: './calles.component.css'
})
export class CallesComponent implements OnInit,OnDestroy {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Barrio'];
  updateRoute: string = '/calles/update/';
  createRoute: string = '/calles/create';
  deleteRoute: string = '/calles/';
  backRoute: string = '/calles'; 
  rol_user: string = "3";
  catalogo: boolean = true;
  private callesSubscription: Subscription | null = null;
  method: string = '';

  constructor(private callesService: CallesService,private route: ActivatedRoute,private router: Router  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

    this.route.queryParams.subscribe((params : any) => {
      if (params.method) {
        console.log('Metodo:', params.method);
        this.method = params.method;
        this.router.navigate([], { queryParams: {} });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.callesSubscription) {
      this.callesSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.callesSubscription) {
      this.callesSubscription.unsubscribe();
    }

    this.callesSubscription = this.callesService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Calles obtenidas:', data);
      },
      (error: any) => {
        console.error('Error al obtener calles', error);
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
