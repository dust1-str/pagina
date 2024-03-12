import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionesCreateFormComponent } from './regiones-create-form.component';

describe('RegionesCreateFormComponent', () => {
  let component: RegionesCreateFormComponent;
  let fixture: ComponentFixture<RegionesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionesCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
