import { Component, OnInit } from '@angular/core';
import { ApartamentosService } from '../Core/Services/apartamentos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Descripcion', 'Edificio', 'Estado']; 
  updateRoute: string = '/apartamentos/update/';
  createRoute: string = '/apartamentos/create';
  deleteRoute: string = '/apartamentos/';
  backRoute: string = '/apartamentos';
  rol_user: string = "3";
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

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.apartamentosService.obtenerElemento().subscribe(
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
