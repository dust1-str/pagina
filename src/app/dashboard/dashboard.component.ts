import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {

  constructor(private router: Router) { }

  @Input() authMessage: string = '';
  @Output() rol = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>();
  
  verificarRol(): void {
    this.rol.emit();
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.logoutEvent.emit();
  }
}
