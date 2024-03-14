import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent {
  @Input() fields: any[] = [];
  @Input() elemento: any;
  @Input() backRoute: string = '';
  @Input() endpoint: string = '';

  createForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private crud: CrudService) { }

  ngOnInit() {
    this.createForm = this.fb.group(
      this.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: new FormControl('', field.validators) }),
        {}
      )
    );
  }

  create() {
    this.crud.create(this.endpoint, this.createForm.value.Nombre).subscribe({
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
