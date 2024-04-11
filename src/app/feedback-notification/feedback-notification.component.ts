import { Component, Input, Output, EventEmitter,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Objeto } from '../Core/Interfaces/objeto';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-feedback-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-notification.component.html',
  styleUrl: './feedback-notification.component.css',
  animations: [
    trigger('fade', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),
      transition(':leave', [
        animate(600, style({opacity: 0}))
      ])
    ])
  ]
})

export class FeedbackNotificationComponent implements OnInit {
  @Input() method: string = "";
  mostrar: boolean = false;
  fadeOut: boolean = false;

  ngOnInit(): void {
    this.mostrarNotificacion();
  }

  mostrarNotificacion() {
    this.mostrar = true;
    this.fadeOut = false;
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 1000);
    }, 3000);
  }
}