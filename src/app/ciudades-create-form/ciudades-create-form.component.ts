import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudades-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ciudades-create-form.component.html',
  styleUrl: './ciudades-create-form.component.css'
})
export class CiudadesCreateFormComponent {
  regiones: any[] = [];
  ciudadForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    RegionID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getRegiones().subscribe({
      next: (data) => {
        console.log(data);
        this.regiones = data;
        console.log(this.regiones);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.ciudadForm.value.Nombre;
    const RegionID = this.ciudadForm.value.RegionID;
    
    if (Nombre && RegionID) {
      this.crud.createCiudad(Nombre, RegionID).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/ciudades']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
