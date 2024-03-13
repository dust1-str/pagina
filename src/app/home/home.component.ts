import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Core/Services/usuario.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Email','Rol'];
  updateRoute: string = '/usuarios/update/';
  createRoute: string = '/usuarios/create'; 
  deleteRoute: string = '/usuarios/';
  backRoute: string = '/usuarios';
  rol_user: string = "3";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

  }

  obtenerDatos() {
    this.usuarioService.obtenerElementos().subscribe(
      data => {
        this.elementos = data;
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
