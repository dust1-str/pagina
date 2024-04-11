import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inquilino-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './inquilino-create-form.component.html',
  styleUrl: '../create-form/create-form.component.css'
})
export class InquilinoCreateFormComponent {
  inquilinoForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Apellido: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.email]),
    Cedula: new FormControl('', [Validators.required, Validators.minLength(13), Validators.pattern("^[0-9]*$")]),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  create() {
    const Nombre = this.inquilinoForm.value.Nombre;
    const Apellido = this.inquilinoForm.value.Apellido;
    const Telefono = this.inquilinoForm.value.Telefono;
    const Email = this.inquilinoForm.value.Email;
    const Cedula = this.inquilinoForm.value.Cedula;
    
    if (Nombre && Apellido && Telefono && Email && Cedula) {
      this.crud.createInquilino(Nombre, Apellido, Telefono, Email, Cedula).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/inquilinos'], { queryParams: { method: 'POST' } });        
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
