import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edificio-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './edificio-update-form.component.html',
  styleUrl: '../update-form/update-form.component.css'
})
export class EdificioUpdateFormComponent {
  calles: any[] = [];
  edificio: any;
  edificioForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CalleID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.crud.getEdificio(idString).subscribe({
        next: (data) => {
          this.edificio = data;
          this.edificioForm.setValue({
            Nombre: this.edificio.Nombre,
            CalleID: this.edificio.CalleID,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
    this.crud.getCalles().subscribe({
      next: (data) => {
        console.log(data);
        this.calles = data;
        console.log(this.calles);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  update() {
    const Nombre = this.edificioForm.value.Nombre;
    const CalleID = this.edificioForm.value.CalleID;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && CalleID && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateEdificio(Nombre, CalleID, id).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/edificios']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
