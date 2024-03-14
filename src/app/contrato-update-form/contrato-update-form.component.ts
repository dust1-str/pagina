import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrato-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './contrato-update-form.component.html',
  styleUrl: '../update-form/update-form.component.css'
})
export class ContratoUpdateFormComponent {
  inquilinos: any[] = [];
  apartamentos: any[] = [];
  contrato: any;
  contratoForm = new FormGroup({
    Fecha_Inicio: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Fecha_Fin: new FormControl('', [Validators.required, Validators.minLength(3)]),
    InquilinoID: new FormControl('', Validators.required),
    ApartamentoID: new FormControl('', Validators.required),
    Monto: new FormControl('', Validators.required),
  });

  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      this.crud.getContrato(idString).subscribe({
        next: (data) => {
          this.contrato = data;
          this.contratoForm.setValue({
            Fecha_Inicio: this.contrato.Fecha_Inicio,
            Fecha_Fin: this.contrato.Fecha_Final,
            InquilinoID: this.contrato.InquilinoID,
            ApartamentoID: this.contrato.ApartamentoID,
            Monto: this.contrato.Monto,
          });
        },
        error: error => {
          console.log(error);
        }
      });
    }
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

  update() {
    const Fecha_Inicio = this.contratoForm.value.Fecha_Inicio ? new Date(this.contratoForm.value.Fecha_Inicio).toISOString().slice(0, 10) : undefined;
    const Fecha_Fin = this.contratoForm.value.Fecha_Fin ? new Date(this.contratoForm.value.Fecha_Fin).toISOString().slice(0, 10) : undefined;
    const InquilinoID = this.contratoForm.value.InquilinoID;
    const ApartamentoID = this.contratoForm.value.ApartamentoID;
    const Monto = this.contratoForm.value.Monto;
    
    if (Fecha_Inicio && Fecha_Fin && InquilinoID && ApartamentoID && Monto) {
      const idString = this.route.snapshot.paramMap.get('id');
      if (idString) {
        const id = parseInt(idString, 10);
        this.crud.updateContrato(Fecha_Inicio, Fecha_Fin, InquilinoID, ApartamentoID, Monto, id).subscribe({
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
}
