import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudService } from '../Core/Services/crud.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  rol_user: string = "3";

  constructor(private router: Router, private crud: CrudService) { }

  ngOnInit() {
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
  }

  @Input() authMessage: string = '';
  @Output() rol = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();
  
  verificarRol(): void {
    this.rol.emit();
  }
  logout(): void {
    this.logoutEvent.emit();
  }
}
