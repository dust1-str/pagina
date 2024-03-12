import { Component } from '@angular/core';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paises-update-form',
  standalone: true,
  imports: [UpdateFormComponent],
  templateUrl: './paises-update-form.component.html',
  styleUrl: './paises-update-form.component.css'
})
export class PaisesUpdateFormComponent {
  fields = [
    { name: 'Nombre', label: 'Nombre del país', type: 'text', validators: [Validators.required, Validators.minLength(8)] },
    // Agrega más campos aquí según sea necesario
  ];
  elemento = 'paises';
  id: string | null = '';
  backRoute = '/paises';
  endpoint = '/paises/'

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
