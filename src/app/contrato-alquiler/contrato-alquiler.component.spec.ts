import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoAlquilerComponent } from './contrato-alquiler.component';

describe('ContratoAlquilerComponent', () => {
  let component: ContratoAlquilerComponent;
  let fixture: ComponentFixture<ContratoAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratoAlquilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratoAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
