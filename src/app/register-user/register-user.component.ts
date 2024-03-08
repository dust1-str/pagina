import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RegisterUserService } from '../Core/Services/register-user.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  errorMessage: string = '';
  successMessage: string = '';
  success: boolean = false;
  showPassword = new FormControl(false);
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  });

  constructor(private router: Router, private userService: RegisterUserService) { }

  register() {
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    if (name && email && password){
      this.errorMessage = '';
      this.userService.register(name, email, password).subscribe({
        next: (data) => {
          this.errorMessage = '';
          this.success = true;
          console.log(data);
          this.successMessage = 'Se ha enviado un correo de verificación a tu correo. Verifica tu cuenta para poder iniciar sesión';
        },
        error: error => {
          this.success = false;
          this.errorMessage = error.error.message;
          console.log(error.error.message);
        }
    });
  }
}
  goLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
