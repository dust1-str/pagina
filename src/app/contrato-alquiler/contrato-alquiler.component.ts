import { Component, OnInit } from '@angular/core';
import { ContratoAlquilerService } from '../Core/Services/contrato-alquiler.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrato-alquiler',
  standalone: true,
  imports: [TableComponent,CommonModule,DashboardComponent],
  templateUrl: './contrato-alquiler.component.html',
  styleUrl: './contrato-alquiler.component.css'
})
export class ContratoAlquilerComponent implements OnInit{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'Fecha_Inicio', 'Fecha_Final', 'Inquilino', 'Apartamento','Monto']; 

  constructor(private contratoAlquilerService: ContratoAlquilerService) { }

  ngOnInit(): void {
    this.obtenerDatos();

  }

  actualizarElementos() {
    this.ngOnInit();
  }

  obtenerDatos() {
    this.contratoAlquilerService.obtenerElemento().subscribe(
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
