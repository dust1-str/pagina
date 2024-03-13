import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCreateFormComponent } from './contrato-create-form.component';

describe('ContratoCreateFormComponent', () => {
  let component: ContratoCreateFormComponent;
  let fixture: ComponentFixture<ContratoCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratoCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratoCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
