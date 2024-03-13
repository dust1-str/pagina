import { Component,Input  } from '@angular/core';
import { DashboardComponent } from '././dashboard/dashboard.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CrudService } from './Core/Services/crud.service';



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

  constructor(private router: Router, private crud: CrudService) {
    this.crud.loginSuccessful.subscribe(() => {
      console.log('login successful');
      this.ngOnInit();
    });
   }

  ngOnInit() {
    const rol = localStorage.getItem('role_id');
    const token = localStorage.getItem('token');
    if (rol && rol !== 'null') {
      if ((rol === '3' || rol === '2' || rol === '1') && token && token !== null) {
            this.authMessage = 'Usuario autenticado';
            this.authStatus = true;
        } else {
            this.authMessage = 'Rol no definido';
            this.authStatus = false;
            this.router.navigate(['/login']);
        }
    } else {
        this.authMessage = 'Rol no definido';
        this.authStatus = false;
        this.router.navigate(['/login']);
    }
    localStorage.setItem('auth', this.authStatus.toString());
    console.log(this.authStatus);
    console.log(this.authMessage);
}

  navigateTo(table: string): void {
    this.router.navigate([table.toLowerCase()]);
  }
  
}
