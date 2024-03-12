import { Component, OnInit } from '@angular/core';
import { CallesService } from '../Core/Services/calles.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calles',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './calles.component.html',
  styleUrl: './calles.component.css'
})
export class CallesComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'BarrioID']; 

  constructor(private callesSerive: CallesService) { }

  ngOnInit(): void {
    this.obtenerDatos();

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
