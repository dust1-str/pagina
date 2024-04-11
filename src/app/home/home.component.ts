import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Core/Services/usuario.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { FeedbackNotificationComponent } from '../feedback-notification/feedback-notification.component';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent,FeedbackNotificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Email','Rol', 'Estado'];
  updateRoute: string = '/usuarios/update/';
  createRoute: string = '/usuarios/create'; 
  deleteRoute: string = '/usuarios/';
  backRoute: string = '/home';
  rol_user: string = "3";
  section_id: boolean = true;
  method: string = '';


  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute,private router: Router  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    localStorage.removeItem('stop');
    localStorage.removeItem('userAct_id');

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
    this.usuarioService.obtenerElementos().subscribe(
      data => {
        this.elementos = data;
        console.log('Elementos obtenidos:', this.elementos);
      },
      error => {
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
    console.log('se agregara un nuevo elemento ');
  }

}
