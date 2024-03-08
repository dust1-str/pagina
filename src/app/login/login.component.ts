import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../Core/Services/login-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  code = new FormControl('', [Validators.required, Validators.minLength(6)]);
  authCode: string = '';
  loginMessage: string = '';
  authMessage: string = '';
  state: boolean = false;
  activate: boolean = false;
  token: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginMessage = '';
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    if (email && password) {
      this.loginService.login(email, password).subscribe({
        next: (data) => {
          this.auth(email);
          this.state = true;
          this.token = data.access_token;
          console.log(data);
        },
        error: error => {
          console.log(error.error.error);
          if (error.error.error === 'Unauthorized') {
            this.loginMessage = 'Error. Verifica tus credenciales.'
          } else if (error.error.error === 'Email not verified') {
            this.loginMessage = 'Verifica tu correo para poder iniciar sesión.'
          }
          this.state = false;
        }
    });
    } 
  }

  auth(email: string) {
    this.loginService.Auth(email).subscribe({
      next: (data) => {
        console.log(data);
        this.state = true;
        this.authCode = data.code;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  verifyCode(event: Event) {
    setTimeout(() => {
      this.authMessage = '';
    }, 1500);
    console.log(this.code.value);
    event.preventDefault();
    if (this.code.value === this.authCode) {
      this.activate = true;
      this.authMessage = 'Código correcto. Redirigiendo...';
      localStorage.setItem('token', this.token);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    } else {
      this.activate = false;
      this.authMessage = 'Código incorrecto. Inténtalo de nuevo.';
    }
  }
    
}