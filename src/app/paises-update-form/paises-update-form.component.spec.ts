import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesUpdateFormComponent } from './paises-update-form.component';

describe('PaisesUpdateFormComponent', () => {
  let component: PaisesUpdateFormComponent;
  let fixture: ComponentFixture<PaisesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
