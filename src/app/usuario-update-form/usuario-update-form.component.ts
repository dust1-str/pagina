import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario-update-form.component.html',
  styleUrl: './usuario-update-form.component.css'
})
export class UsuarioUpdateFormComponent {
  roles: any[] = [];
  showPassword = new FormControl(false);
  usuarioForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    role_id: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getRoles().subscribe({
      next: (data) => {
        console.log(data);
        this.roles = data;
        console.log(this.roles);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  update() {
    const name = this.usuarioForm.value.name;
    const email = this.usuarioForm.value.email;
    const password = this.usuarioForm.value.password;
    const role_id = this.usuarioForm.value.role_id;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (name && email && password && role_id && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateUsuario(name, email, password, role_id, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
