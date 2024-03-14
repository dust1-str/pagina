import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barrio-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './barrio-update-form.component.html',
  styleUrl: '../update-form/update-form.component.css'
})
export class BarrioUpdateFormComponent {
  distritos: any[] = [];
  barrio: any;
  barrioForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    DistritoID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.crud.getBarrio(idString).subscribe({
        next: (data) => {
          this.barrio = data;
          this.barrioForm.setValue({
            Nombre: this.barrio.Nombre,
            DistritoID: this.barrio.DistritoID,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
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

  update() {
    const Nombre = this.barrioForm.value.Nombre;
    const DistritoID = this.barrioForm.value.DistritoID;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && DistritoID && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateBarrio(Nombre, DistritoID, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/barrios']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
