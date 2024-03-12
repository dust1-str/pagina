import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesService } from '../Core/Services/paises.service';
import { ServiceFactoryService } from '../Core/Services/service-factory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  @Input() fields: any[] = [];
  @Input() elemento: any;
  @Input() id: any;
  @Input() backRoute: string = '';

  services: any[] = [PaisesService];

  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private serviceFactory: ServiceFactoryService, private router: Router) { }

  ngOnInit() {
    console.log(this.id);
    this.updateForm = this.fb.group(
      this.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: new FormControl('', field.validators) }),
        {}
      )
    );
  }

  update() {
    let service;
    if (this.elemento == 'paises'){
      service = this.serviceFactory.getPaisesService();
    }

    service?.update(this.id, this.updateForm.value.Nombre).subscribe({
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
