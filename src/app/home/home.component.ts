import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
}
