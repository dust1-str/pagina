import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartamentos-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './apartamentos-create-form.component.html',
  styleUrl: './apartamentos-create-form.component.css'
})
export class ApartamentosCreateFormComponent {
  edificios: any[] = [];
  apartamentoForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Descripcion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    EdificioID: new FormControl('', Validators.required),
    Estado: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getEdificios().subscribe({
      next: (data) => {
        console.log(data);
        this.edificios = data;
        console.log(this.edificios);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.apartamentoForm.value.Nombre;
    const Descripcion = this.apartamentoForm.value.Descripcion;
    const EdificioID = this.apartamentoForm.value.EdificioID;
    const Estado = this.apartamentoForm.value.Estado;
    
    if (Nombre && Descripcion && EdificioID && Estado) {
      this.crud.createApartamento(Nombre, Descripcion, EdificioID, Estado).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/apartamentos']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
