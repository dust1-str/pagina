import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  rol_user: string = "3";

  constructor(private router: Router) { }

  ngOnInit() {
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
  }

  @Input() authMessage: string = '';
  @Output() rol = new EventEmitter<void>();
  
  verificarRol(): void {
    this.rol.emit();
  }
  logout(): void {
  }
}
