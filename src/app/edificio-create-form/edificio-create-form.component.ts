import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edificio-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './edificio-create-form.component.html',
  styleUrl: '../create-form/create-form.component.css'
})
export class EdificioCreateFormComponent {
  calles: any[] = [];
  edificioForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CalleID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
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

  create() {
    const Nombre = this.edificioForm.value.Nombre;
    const CalleID = this.edificioForm.value.CalleID;
    
    if (Nombre && CalleID) {
      this.crud.createEdificio(Nombre, CalleID).subscribe({
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
