import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosUpdateFormComponent } from './apartamentos-update-form.component';

describe('ApartamentosUpdateFormComponent', () => {
  let component: ApartamentosUpdateFormComponent;
  let fixture: ComponentFixture<ApartamentosUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartamentosUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApartamentosUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
