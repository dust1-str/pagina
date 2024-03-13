import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-confirmacion-eliminacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion-eliminacion.component.html',
  styleUrl: './confirmacion-eliminacion.component.css',
})


export class ConfirmacionEliminacionComponent {
  
  @Output() confirmado = new EventEmitter<boolean>();

  confirmar() {
    this.confirmado.emit(true);
  }

  cancelar() {
    this.confirmado.emit(false);
  }
  
}
