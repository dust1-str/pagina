import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inquilino-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './inquilino-update-form.component.html',
  styleUrl: '../update-form/update-form.component.css'
})
export class InquilinoUpdateFormComponent {
  inquilino: any;
  inquilinoForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Apellido: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    Telefono: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.email]),
    Cedula: new FormControl('', [Validators.required, Validators.maxLength(15)]),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.crud.getInquilino(idString).subscribe({
        next: (data) => {
          this.inquilino = data;
          this.inquilinoForm.setValue({
            Nombre: this.inquilino.Nombre,
            Apellido: this.inquilino.Apellido,
            Telefono: this.inquilino.Telefono,
            Email: this.inquilino.Email,
            Cedula: this.inquilino.Cedula,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  update() {
    const Nombre = this.inquilinoForm.value.Nombre;
    const Apellido = this.inquilinoForm.value.Apellido;
    const Telefono = this.inquilinoForm.value.Telefono;
    const Email = this.inquilinoForm.value.Email;
    const Cedula = this.inquilinoForm.value.Cedula;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && Apellido && Telefono && Email && Cedula && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateInquilino(Nombre, Apellido, Telefono, Email, Cedula, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/inquilinos']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
