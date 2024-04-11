import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barrio-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './barrio-create-form.component.html',
  styleUrl: '../create-form/create-form.component.css'
})
export class BarrioCreateFormComponent {
  distritos: any[] = [];
  barrioForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    DistritoID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getDistritos().subscribe({
      next: (data) => {
        console.log(data);
        this.distritos = data;
        console.log(this.distritos);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.barrioForm.value.Nombre;
    const DistritoID = this.barrioForm.value.DistritoID;
    
    if (Nombre && DistritoID) {
      this.crud.createBarrio(Nombre, DistritoID).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/barrios'], { queryParams: { method: 'POST' } });        

        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
