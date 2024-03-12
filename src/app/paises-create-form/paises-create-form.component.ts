import { Component } from '@angular/core';
import { CreateFormComponent } from '../create-form/create-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-paises-create-form',
  standalone: true,
  imports: [CreateFormComponent],
  templateUrl: './paises-create-form.component.html',
  styleUrl: './paises-create-form.component.css'
})
export class PaisesCreateFormComponent {
  fields = [
    { name: 'Nombre', label: 'Nombre del país', type: 'text', validators: [Validators.required, Validators.minLength(8)] },
    // Agrega más campos aquí según sea necesario
  ];
  elemento = 'paises';
  backRoute = '/paises';
}
