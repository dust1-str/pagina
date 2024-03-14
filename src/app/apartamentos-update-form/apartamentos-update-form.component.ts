import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartamentos-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './apartamentos-update-form.component.html',
  styleUrl: '../update-form/update-form.component.css'
})
export class ApartamentosUpdateFormComponent {
  edificios: any[] = [];
  estados = [
    { id: 0, name: 'Inactivo' },
    { id: 1, name: 'Activo' }
  ];
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

  update() {
    const Nombre = this.apartamentoForm.value.Nombre;
    const Descripcion = this.apartamentoForm.value.Descripcion;
    const EdificioID = this.apartamentoForm.value.EdificioID;
    const Estado = this.apartamentoForm.value.Estado;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && Descripcion && EdificioID && Estado && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateApartamento(Nombre, Descripcion, EdificioID, Estado, id).subscribe({
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
