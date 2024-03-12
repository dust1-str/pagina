import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesCreateFormComponent } from './ciudades-create-form.component';

describe('CiudadesCreateFormComponent', () => {
  let component: CiudadesCreateFormComponent;
  let fixture: ComponentFixture<CiudadesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadesCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiudadesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
