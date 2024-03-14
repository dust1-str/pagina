import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrato-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './contrato-create-form.component.html',
  styleUrl: '../create-form/create-form.component.css'
})
export class ContratoCreateFormComponent {
  inquilinos: any[] = [];
  apartamentos: any[] = [];
  contratoForm = new FormGroup({
    Fecha_Inicio: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Fecha_Fin: new FormControl('', [Validators.required, Validators.minLength(3)]),
    InquilinoID: new FormControl('', Validators.required),
    ApartamentoID: new FormControl('', Validators.required),
    Monto: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crud.getInquilinos().subscribe({
      next: (data) => {
        console.log(data);
        this.inquilinos = data;
        console.log(this.inquilinos);
      },
      error: error => {
        console.log(error);
      }
    });
    this.crud.getApartamentos().subscribe({
      next: (data) => {
        console.log(data);
        this.apartamentos = data;
        console.log(this.apartamentos);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  create() {
    const Fecha_Inicio = this.contratoForm.value.Fecha_Inicio ? new Date(this.contratoForm.value.Fecha_Inicio).toISOString().slice(0, 10) : undefined;
    const Fecha_Fin = this.contratoForm.value.Fecha_Fin ? new Date(this.contratoForm.value.Fecha_Fin).toISOString().slice(0, 10) : undefined;
    const InquilinoID = this.contratoForm.value.InquilinoID;
    const ApartamentoID = this.contratoForm.value.ApartamentoID;
    const Monto = this.contratoForm.value.Monto;
    
    if (Fecha_Inicio && Fecha_Fin && InquilinoID && ApartamentoID && Monto) {
      this.crud.createContrato(Fecha_Inicio, Fecha_Fin, InquilinoID, ApartamentoID, Monto).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/contrato-alquiler']);
        },
        error: error => {
          console.log(error);
        }
      });
    }
}
}
