import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';
import { Router } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,ConfirmacionEliminacionComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {


  @Input() elementos: Objeto[] = [];
  @Input() columnas: string[] = [];
  @Input() updateRoute: string = '';
  @Input() createRoute: string = '';
  @Input() deleteRoute: string = '';
  @Input() backRoute: string = '';
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
  @Output() agregar = new EventEmitter();
  @Output() elementoEliminado = new EventEmitter<void>();

  constructor(private router: Router, private crud: CrudService) { }
  mostrarConfirmacion: boolean = false;
  idElemento: number = 0;

  emitirAviso(id: number) {
    this.mostrarConfirmacion = true;
    this.idElemento = id;
  }

  emitirEditar(id: number) {
    this.editar.emit(id);
    this.router.navigate([this.updateRoute + id]);
  }

  eliminarElemento(decision: boolean) {
    if (decision) {
      this.emitirEliminar(this.idElemento);
      console.log('idElemento', this.idElemento);
      this.mostrarConfirmacion = false;
    }
    else {
      this.mostrarConfirmacion = false;
      console.log('idElemento', this.idElemento);

    }

  }

  emitirEliminar(id: number) {
    this.eliminar.emit(id);
    this.crud.eliminar(this.deleteRoute, id).subscribe(
      data => {
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([this.router.url]);
        this.elementoEliminado.emit(); 
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