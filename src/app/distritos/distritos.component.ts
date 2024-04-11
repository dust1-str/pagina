import { Component, OnDestroy, OnInit } from '@angular/core';
import { DistritosService } from '../Core/Services/distritos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-distritos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './distritos.component.html',
  styleUrl: './distritos.component.css'
})
export class DistritosComponent implements OnInit, OnDestroy {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Ciudad']; 
  updateRoute: string = '/distritos/update/';
  createRoute: string = '/distritos/create';
  deleteRoute: string = '/distritos/';
  backRoute: string = '/distritos';
  rol_user: string = "3";
  catalogo: boolean = true;
  private distritosSubscription: Subscription | null = null;
  method: string = '';

  constructor(private distritosService: DistritosService,private route: ActivatedRoute,private router: Router  ) { }

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
    if (this.distritosSubscription) {
      this.distritosSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    if (this.distritosSubscription) {
      this.distritosSubscription.unsubscribe();
    }

    this.distritosSubscription = this.distritosService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Distritos obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener distritos', error);
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
