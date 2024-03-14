import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudades-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ciudades-update-form.component.html',
  styleUrl: './ciudades-update-form.component.css'
})
export class CiudadesUpdateFormComponent {
  regiones: any[] = [];
  ciudad: any;
  ciudadForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    RegionID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.crud.getCiudad(idString).subscribe({
        next: (data) => {
          this.ciudad = data;
          this.ciudadForm.setValue({
            Nombre: this.ciudad.Nombre,
            RegionID: this.ciudad.RegionID,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
    this.crud.getRegiones().subscribe({
      next: (data) => {
        this.regiones = data;
        console.log(this.regiones);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  update() {
    const Nombre = this.ciudadForm.value.Nombre;
    const RegionID = this.ciudadForm.value.RegionID;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && RegionID && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateCiudad(Nombre, RegionID, id).subscribe({
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
