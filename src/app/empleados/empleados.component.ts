import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmpleadoService } from '../Core/Services/empleado.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit, OnDestroy {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre'];
  updateRoute: string = '/paises/update/';
  createRoute: string = '/paises/create'; 
  deleteRoute: string = '/paises/';
  backRoute: string = '/paises';
  rol_user: string = "3";
  catalogo: boolean = true;
  private empleadoSubscription: Subscription | null = null;
  timerId: any;
  method: string = '';

  constructor(private empleadoService: EmpleadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

    this.route.queryParams.subscribe((params: any) => {
      if (params.method) {
        console.log('Metodo:', params.method);
        this.method = params.method;
        this.router.navigate([], { queryParams: {} });
      }
    });
    this.poleo();
  }

  ngOnDestroy(): void {
    if (this.empleadoSubscription) {
      this.empleadoSubscription.unsubscribe();
    }
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  poleo() {
    this.timerId = setTimeout(() => {
      this.obtenerDatos();
      this.poleo();
  }, 5000);
  }

  obtenerDatos() {
    if (this.empleadoSubscription) {
      this.empleadoSubscription.unsubscribe();
    }

    this.empleadoSubscription = this.empleadoService.obtenerEmpleados().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Empleados obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener empleados', error);
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
    console.log('Agregar nuevo elemento');
  }

  actualizarElementos() {
    this.obtenerDatos();
  }
}
