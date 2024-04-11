import { Component, OnDestroy, OnInit } from '@angular/core';
import { EdificiosService } from '../Core/Services/edificios.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edificios',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './edificios.component.html',
  styleUrl: './edificios.component.css'
})
export class EdificiosComponent implements OnInit, OnDestroy {

  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Calle']; 
  updateRoute: string = '/edificios/update/';
  createRoute: string = '/edificios/create';
  deleteRoute: string = '/edificios/';
  backRoute: string = '/edificios';
  rol_user: string = "3";
  catalogo: boolean = false;
  private edificiosSubscription: Subscription | null = null;
  method: string = '';

  constructor(private edificiosService: EdificiosService,private route: ActivatedRoute,private router: Router  ) { }

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
    if (this.edificiosSubscription) {
      this.edificiosSubscription.unsubscribe();
    }
  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    if (this.edificiosSubscription) {
      this.edificiosSubscription.unsubscribe();
    }

    this.edificiosSubscription = this.edificiosService.obtenerElemento().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
        console.log('Edificios obtenidos:', data);
      },
      (error: any) => {
        console.error('Error al obtener edificios', error);
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
