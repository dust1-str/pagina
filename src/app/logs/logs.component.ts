import { Component, Input, Output, EventEmitter,OnInit, AfterViewChecked, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';
import { Router,RouterLink } from '@angular/router';
import { InteractionsService } from '../Core/Services/interactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent implements OnInit, OnDestroy{
elementos: Objeto[] = [];
@ViewChild('logsContainer') private logsContainer!: ElementRef;
private logSubscription: Subscription | null;

constructor(private router: Router,private interactionsService: InteractionsService) { }


ngOnInit(): void {
  this.obtenerDatos();
}

ngOnDestroy(): void {
  if (this.logSubscription) {
    this.logSubscription.unsubscribe();
  }
}


obtenerDatos() {

  if (this.logSubscription) {
    this.logSubscription.unsubscribe();
  }

  this.logSubscription = this.interactionsService.obtenerElemento().subscribe(
    (data) => {
      this.elementos = data;
    },
    (error) => {
      console.error('Error al obtener elementos', error);
    }
  );
}

isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

objectKeys(value: any): string[] {
  return Object.keys(value);
}

ngAfterViewChecked() {
  this.scrollToBottom();
}

scrollToBottom(): void {
  this.logsContainer.nativeElement.scrollTop = this.logsContainer.nativeElement.scrollHeight;
}
}
