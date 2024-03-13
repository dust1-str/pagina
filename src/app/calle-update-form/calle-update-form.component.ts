import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calle-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './calle-update-form.component.html',
  styleUrl: './calle-update-form.component.css'
})
export class CalleUpdateFormComponent {
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

  update() {
    const Nombre = this.calleForm.value.Nombre;
    const BarrioID = this.calleForm.value.BarrioID;
    const idString = this.route.snapshot.paramMap.get('id');
    
    if (Nombre && BarrioID && idString) {
      const id = parseInt(idString, 10);
      this.crud.updateCalle(Nombre, BarrioID, id).subscribe({
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
