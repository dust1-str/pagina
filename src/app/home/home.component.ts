import { Component,Input  } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authMessage: string = '';

  constructor(private router: Router) { }
 
  ngOnInit() {
    const rol = localStorage.getItem('role_id');
    if (rol === '3') {
      this.authMessage = 'Usuario no autenticado';
    } else {
      this.authMessage = 'Usuario autenticado';
    }
  }
  navigateTo(table: string): void {
    this.router.navigate([table.toLowerCase()]);
  }
  


  logout(): void {
    // Agrega la lógica de logout aquí
  }
}
