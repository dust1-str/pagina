import { Component, OnInit } from '@angular/core';
import { CallesService } from '../Core/Services/calles.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calles',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './calles.component.html',
  styleUrl: './calles.component.css'
})
export class CallesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Barrio'];
  updateRoute: string = '/calles/update/';
  createRoute: string = '/calles/create';
  deleteRoute: string = '/calles/';
  backRoute: string = '/calles'; 
  rol_user: string = "3";
  catalogo: boolean = true;
  method: string = '';

  constructor(private callesSerive: CallesService,private route: ActivatedRoute,private router: Router  ) { }

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

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.callesSerive.obtenerElemento().subscribe(
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
