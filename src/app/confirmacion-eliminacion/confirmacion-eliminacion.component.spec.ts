import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionEliminacionComponent } from './confirmacion-eliminacion.component';

describe('ConfirmacionEliminacionComponent', () => {
  let component: ConfirmacionEliminacionComponent;
  let fixture: ComponentFixture<ConfirmacionEliminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacionEliminacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacionEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
