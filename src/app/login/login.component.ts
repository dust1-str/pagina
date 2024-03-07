import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../Core/Services/login-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginMessage: string = '';
  state: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginMessage = '';
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    if (email && password) {
      this.loginService.login(email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.loginMessage = 'Inicio de sesión exitoso.'
          this.state = true;
          localStorage.setItem('token', data.access_token);
          console.log(data.access_token)
          console.log(localStorage.getItem('token'));
          this.router.navigate(['/auth']);
        },
        error: error => {
          console.log(error.error.message);
          this.loginMessage = 'Error. Verifica tus credenciales.'
          this.state = false;
        }
    });
    } 
  }
    
}