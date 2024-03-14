import { Component, OnInit } from '@angular/core';
import { BarriosService } from '../Core/Services/barrios.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barrios',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './barrios.component.html',
  styleUrl: './barrios.component.css'
})
export class BarriosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Distrito']; 
  updateRoute: string = '/barrios/update/';
  createRoute: string = '/barrios/create';
  deleteRoute: string = '/barrios/';
  backRoute: string = '/barrios';
  rol_user: string = "3";
  catalogo: boolean = true;

  constructor(private barriosService: BarriosService) { }

  ngOnInit(): void {
    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.barriosService.obtenerElemento().subscribe(
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
