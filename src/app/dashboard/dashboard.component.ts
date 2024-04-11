import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudService } from '../Core/Services/crud.service';
import pusherJs from 'pusher-js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent {
  rol_user: string = "3";
  pusher: any;

  constructor(private router: Router, private crud: CrudService) { }

  ngOnInit() {
    this.rol_user = localStorage.getItem('role_id') || this.rol_user;
    localStorage.removeItem('stop');
    localStorage.removeItem('userAct_id');
    this.iniciarPusher();
  }

  ngOnDestroy(): void {
    if (this.pusher) {
      this.pusher.disconnect();
    }
  }

  iniciarPusher() {
    this.pusher = new pusherJs('fb2cba6f8134ca70e39a', {
      cluster: 'us3',
      forceTLS: false,
      wsHost: window.location.hostname,
      wsPort: 6001,
      enabledTransports: ['ws']
    });
    let channel = this.pusher.subscribe('channel-user');
    channel.bind('App\\Events\\userChange', (data: any) => {
      console.log('Evento recibido:', data);
      let idString = localStorage.getItem('userAct_id') || '';
      const stop = localStorage.getItem('stop') || '';
      let rolNuevo = '';
      if (!idString) {
        localStorage.setItem('userAct_id', '0');
        idString = localStorage.getItem('userAct_id') || '';
        this.crud.me().subscribe({
          next: (data) => {
            console.log(data);
            localStorage.setItem('role_id', data.role_id);
          },
          error: error => {
            console.log(error);
          }
        });
      }
      this.crud.getUsuario(idString).subscribe({
        next: (data) => {
          console.log(data);
          rolNuevo = data.role_id;
          console.log(rolNuevo);
          localStorage.removeItem('userAct_id')
          if (!stop) {
            console.log(rolNuevo);
            localStorage.removeItem('role_id');
            localStorage.setItem('role_id', rolNuevo);
            location.reload();
          }
        },
        error: error => {
          console.log(error);
        }
      });
      
    });
    
      
    this.pusher.connection.bind('connected', () => {
      console.log('Conexión establecida');
    });
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
