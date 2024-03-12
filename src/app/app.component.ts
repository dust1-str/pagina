import { Component,Input  } from '@angular/core';
import { DashboardComponent } from '././dashboard/dashboard.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-practica';
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
  
}
