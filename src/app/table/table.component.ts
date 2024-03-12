import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  ngOnInit() {
    console.log('Columnas cargadas en Tabla:', this.columnas);
    console.log('Elementos cargados en Tabla :', this.elementos);
  }

  @Input() elementos: Objeto[] = [];
  @Input() columnas: string[] = [];
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  @Output() agregar = new EventEmitter();

  emitirEditar(id: number) {
    this.editar.emit(id);
  }

  emitirEliminar(id: number) {
    this.eliminar.emit(id);
  }

  emitirAgregar() {
    this.agregar.emit();
  }
}