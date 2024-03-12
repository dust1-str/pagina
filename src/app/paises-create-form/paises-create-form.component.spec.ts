import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCreateFormComponent } from './paises-create-form.component';

describe('PaisesCreateFormComponent', () => {
  let component: PaisesCreateFormComponent;
  let fixture: ComponentFixture<PaisesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaisesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
