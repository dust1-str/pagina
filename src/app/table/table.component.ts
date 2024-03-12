import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';
import { Router } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';

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
  @Input() updateRoute: string = '';
  @Input() createRoute: string = '';
  @Input() deleteRoute: string = '';
  @Input() backRoute: string = '';
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  @Output() agregar = new EventEmitter();

  constructor(private router: Router, private crud: CrudService) { }

  emitirEditar(id: number) {
    this.editar.emit(id);
    this.router.navigate([this.updateRoute + id]);
  }

  emitirEliminar(id: number) {
    this.eliminar.emit(id);
    this.crud.eliminar(this.deleteRoute, id).subscribe(
      data => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      },
      error => {
        console.error('Error al eliminar elemento', error);
      }
    );
  }

  emitirAgregar() {
    this.agregar.emit();
    this.router.navigate([this.createRoute]);
  }
}