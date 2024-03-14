import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../Core/Services/crud.service';
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
  @Input() endpoint: string = '';

  pais: any;

  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private crud: CrudService) { }

  ngOnInit() {
    console.log(this.fields);
    this.updateForm = this.fb.group(
      this.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: new FormControl('', field.validators) }),
        {}
      )
    );
  
    this.crud.getPais(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.pais = data;
        this.updateForm.setValue({
          Nombre: this.pais.Nombre,
        });
      },
      error: error => {
        console.log(error);
      }
    })
    console.log(this.id);
  }

  update() {
    this.crud.update(this.endpoint, this.id, this.updateForm.value.Nombre).subscribe({
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
