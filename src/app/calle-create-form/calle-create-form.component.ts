import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calle-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calle-create-form.component.html',
  styleUrl: './calle-create-form.component.css'
})
export class CalleCreateFormComponent {
  barrios: any[] = [];
  calleForm = new FormGroup({
    Nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    BarrioID: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getBarrios().subscribe({
      next: (data) => {
        console.log(data);
        this.barrios = data;
        console.log(this.barrios);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Nombre = this.calleForm.value.Nombre;
    const BarrioID = this.calleForm.value.BarrioID;
    
    if (Nombre && BarrioID) {
      this.crud.createCalle(Nombre, BarrioID).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/calles']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
  }
}
