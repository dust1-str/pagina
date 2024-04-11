import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApartamentosService } from '../Core/Services/apartamentos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent implements OnInit, OnDestroy {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Descripcion', 'Edificio', 'Estado']; 
  updateRoute: string = '/apartamentos/update/';
  createRoute: string = '/apartamentos/create';
  deleteRoute: string = '/apartamentos/';
  backRoute: string = '/apartamentos';
  rol_user: string = "3";
  private apartamentosSubscription: Subscription | null = null;
  method: string = '';

  constructor(private apartamentosService: ApartamentosService,private route: ActivatedRoute,private router: Router  ) { }

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
    if (this.apartamentosSubscription) {
      this.apartamentosSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.apartamentosSubscription) {
      this.apartamentosSubscription.unsubscribe();
    }

    this.apartamentosSubscription = this.apartamentosService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Apartamentos obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener apartamentos', error);
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
