import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosCreateFormComponent } from './apartamentos-create-form.component';

describe('ApartamentosCreateFormComponent', () => {
  let component: ApartamentosCreateFormComponent;
  let fixture: ComponentFixture<ApartamentosCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartamentosCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartamentosCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
