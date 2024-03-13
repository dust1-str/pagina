import { Component, OnInit } from '@angular/core';
import { RolesService } from '../Core/Services/roles.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule,DashboardComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'name'];

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }


  obtenerDatos() {
    this.rolesService.obtenerEmpleados().subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        console.error('Error al obtener empleados', error);
      }
    );
  }


}
