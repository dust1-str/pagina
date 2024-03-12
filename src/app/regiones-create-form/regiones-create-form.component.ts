import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regiones-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './regiones-create-form.component.html',
  styleUrl: './regiones-create-form.component.css'
})
export class RegionesCreateFormComponent {
  paises: any[] = [];
  regionForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    PaisID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getPaises().subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
        console.log(this.paises);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.regionForm.value.Nombre;
    const PaisID = this.regionForm.value.PaisID;
    
    if (Nombre && PaisID) {
      this.crud.createRegion(Nombre, PaisID).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/regiones']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
