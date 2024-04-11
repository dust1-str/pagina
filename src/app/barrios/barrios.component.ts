import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarriosService } from '../Core/Services/barrios.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barrios',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './barrios.component.html',
  styleUrl: './barrios.component.css'
})
export class BarriosComponent implements OnInit, OnDestroy{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Distrito']; 
  updateRoute: string = '/barrios/update/';
  createRoute: string = '/barrios/create';
  deleteRoute: string = '/barrios/';
  backRoute: string = '/barrios';
  rol_user: string = "3";
  catalogo: boolean = true;
  private barriosSubscription: Subscription | null = null;
  method: string = '';

  constructor(private barriosService: BarriosService,private route: ActivatedRoute,private router: Router  ) { }

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
    if (this.barriosSubscription) {
      this.barriosSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.barriosSubscription) {
      this.barriosSubscription.unsubscribe();
    }

    this.barriosSubscription = this.barriosService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Barrios obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener barrios', error);
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
