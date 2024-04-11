import { Component, OnDestroy, OnInit } from '@angular/core';
import { RolesService } from '../Core/Services/roles.service';
import { Objeto } from '../Core/Interfaces/objeto';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule,DashboardComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit, OnDestroy{
  elementos: Objeto[] = [];
  columnas: string[] = ['id', 'name'];
  private rolesSubscription: Subscription | null = null;

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  ngOnDestroy(): void {
    if (this.rolesSubscription) {
      this.rolesSubscription.unsubscribe();
    }
  }

  obtenerDatos() {
    if (this.rolesSubscription) {
      this.rolesSubscription.unsubscribe();
    }

    this.rolesSubscription = this.rolesService.obtenerEmpleados().subscribe(
      (data: Objeto[]) => {
        this.elementos = data;
      },
      (error: any) => {
        console.error('Error al obtener empleados', error);
      }
    );
  }


}
