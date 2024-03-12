import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesUpdateFormComponent } from './ciudades-update-form.component';

describe('CiudadesUpdateFormComponent', () => {
  let component: CiudadesUpdateFormComponent;
  let fixture: ComponentFixture<CiudadesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiudadesUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiudadesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
