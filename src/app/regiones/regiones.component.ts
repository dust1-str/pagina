import { Component, OnInit } from '@angular/core';
import { RegionService } from '../Core/Services/region.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regiones',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './regiones.component.html',
  styleUrl: './regiones.component.css'
})

export class RegionesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','Pais'];
  updateRoute: string = '/regiones/update/';
  createRoute: string = '/regiones/create'; 
  deleteRoute: string = '/regiones/';
  backRoute: string = '/regiones';  
  rol_user: string = "3";
  catalogo: boolean = true;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {


    this.obtenerDatos();
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;

    //Este wey con que lo descomentes ya tarda en hacer la peticion
   // const eventSource = new EventSource('http://127.0.0.1:8000/api/sse');

   //Quita lo comentado para que veas como funciona el SSE(solo regresa true o false)

    /*eventSource.onmessage = event => {
      const data = JSON.parse(event.data);

      console.log('SSE Mensaje: ', data);

      if (event.data == true) {
        console.log('SSE Cambios en la tabla:', data);
        this.obtenerDatos();
      }
    };*/
  }
  



  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    console.log("AAAAAAAA")
    this.regionService.obtenerElemento().subscribe(
      data => {
        this.elementos = data;
        console.log('Regiones obtenidas:', data)
      },
      error => {
        console.error('Error al obtener regiones', error);
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
