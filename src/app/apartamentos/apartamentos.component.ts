import { Component, OnInit } from '@angular/core';
import { ApartamentosService } from '../Core/Services/apartamentos.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent implements OnInit {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Nombre', 'Descripcion', 'Edificio', 'Estado']; 

  constructor(private apartamentosService: ApartamentosService) { }

  ngOnInit(): void {
    this.obtenerDatos();

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
