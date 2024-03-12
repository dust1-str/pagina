import { Component,Input  } from '@angular/core';
import { DashboardComponent } from '././dashboard/dashboard.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,DashboardComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-practica';
  authMessage: string = '';
  authStatus: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    const rol = localStorage.getItem('role_id');
    if (rol === '3') {
      this.authMessage = 'Usuario no autenticado';
      this.authStatus = false;
    } else {
      this.authMessage = 'Usuario autenticado';
      this.authStatus = true;
    }
    console.log(this.authStatus);
    console.log(this.authMessage);
  }

  navigateTo(table: string): void {
    this.router.navigate([table.toLowerCase()]);
  }
  
}
