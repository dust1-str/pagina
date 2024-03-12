import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceFactoryService } from '../Core/Services/service-factory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  @Input() fields: any[] = [];
  @Input() elemento: any;
  @Input() backRoute: string = '';

  createForm!: FormGroup;

  constructor(private fb: FormBuilder, private serviceFactory: ServiceFactoryService, private router: Router) { }

  ngOnInit() {
    this.createForm = this.fb.group(
      this.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: new FormControl('', field.validators) }),
        {}
      )
    );
  }

  create() {
    let service;
    if (this.elemento == 'paises'){
      service = this.serviceFactory.getPaisesService();
    }

    service?.create(this.createForm.value.Nombre).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/' + this.backRoute]);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
