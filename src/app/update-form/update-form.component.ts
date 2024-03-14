import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../Core/Services/crud.service';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  @Input() fields: any[] = [];
  @Input() elemento: any;
  @Input() id: any;
  @Input() backRoute: string = '';
  @Input() endpoint: string = '';

  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private crud: CrudService) { }

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
