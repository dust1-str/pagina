import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoUpdateFormComponent } from './contrato-update-form.component';

describe('ContratoUpdateFormComponent', () => {
  let component: ContratoUpdateFormComponent;
  let fixture: ComponentFixture<ContratoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratoUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
