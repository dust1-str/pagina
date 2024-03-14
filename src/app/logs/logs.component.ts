import { Component, Input, Output, EventEmitter,OnInit, AfterViewChecked, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';
import { Router } from '@angular/router';
import { CrudService } from '../Core/Services/crud.service';
import { ConfirmacionEliminacionComponent } from '../confirmacion-eliminacion/confirmacion-eliminacion.component';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule,ConfirmacionEliminacionComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
@Input() logs: string[] = [];
@ViewChild('logsContainer') private logsContainer!: ElementRef;

ngOnInit() {
  for (let i = 0; i < 14; i++) {
    this.logs.push('Usuario -  Ruta que se uso - El metodo por el que se hizo - Los datos que se pasaron(Query) - Fechas');
  }
}

ngAfterViewChecked() {
  this.scrollToBottom();
}

scrollToBottom(): void {
  this.logsContainer.nativeElement.scrollTop = this.logsContainer.nativeElement.scrollHeight;
}
}
