import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regiones-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './regiones-update-form.component.html',
  styleUrl: './regiones-update-form.component.css'
})
export class RegionesUpdateFormComponent {
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

  update() {
    const Nombre = this.regionForm.value.Nombre;
    const PaisID = this.regionForm.value.PaisID;
    const idString = this.route.snapshot.paramMap.get('id');
    if (Nombre && PaisID && idString) {
      const id = parseInt(idString, 10);
      console.log(id);
      this.crud.updateRegion(Nombre, PaisID, id).subscribe({
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
