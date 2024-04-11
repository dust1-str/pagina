import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distrito-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './distrito-create-form.component.html',
  styleUrl: '../create-form/create-form.component.css'
})
export class DistritoCreateFormComponent {
  ciudades: any[] = [];
  distritoForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CiudadID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getCiudades().subscribe({
      next: (data) => {
        console.log(data);
        this.ciudades = data;
        console.log(this.ciudades);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.distritoForm.value.Nombre;
    const CiudadID = this.distritoForm.value.CiudadID;
    
    if (Nombre && CiudadID) {
      this.crud.createDistrito(Nombre, CiudadID).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/distritos'], { queryParams: { method: 'POST' } });        

        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
