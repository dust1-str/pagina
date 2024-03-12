import { Component, OnInit } from '@angular/core';
import { EdificiosService } from '../Core/Services/edificios.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edificios',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './edificios.component.html',
  styleUrl: './edificios.component.css'
})
export class EdificiosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre','CalleID']; 

  constructor(private edificiosService: EdificiosService) { }

  ngOnInit(): void {
    this.obtenerDatos();

  }

  obtenerDatos() {
    this.edificiosService.obtenerElemento().subscribe(
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
