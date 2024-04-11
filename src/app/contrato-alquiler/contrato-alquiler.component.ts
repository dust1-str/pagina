import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContratoAlquilerService } from '../Core/Services/contrato-alquiler.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contrato-alquiler',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './contrato-alquiler.component.html',
  styleUrl: './contrato-alquiler.component.css'
})
export class ContratoAlquilerComponent implements OnInit, OnDestroy{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Fecha_Inicio', 'Fecha_Final', 'Inquilino', 'Apartamento','Monto'];
  updateRoute: string = '/contratoAlquilers/update/';
  createRoute: string = '/contratoAlquilers/create';
  deleteRoute: string = '/contratoAlquilers/';
  backRoute: string = '/contratoAlquilers'; 
  rol_user: string = "3";
  private contratoAlquilerSubscription: Subscription | null = null;
  method: string = '';

  constructor(private contratoAlquilerService: ContratoAlquilerService,private route: ActivatedRoute,private router: Router) { }

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
    if (this.contratoAlquilerSubscription) {
      this.contratoAlquilerSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.contratoAlquilerSubscription) {
      this.contratoAlquilerSubscription.unsubscribe();
    }

    this.contratoAlquilerSubscription = this.contratoAlquilerService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Contratos de alquiler obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener contratos de alquiler', error);
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
