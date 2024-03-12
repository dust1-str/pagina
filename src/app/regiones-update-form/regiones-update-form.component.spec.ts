import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionesUpdateFormComponent } from './regiones-update-form.component';

describe('RegionesUpdateFormComponent', () => {
  let component: RegionesUpdateFormComponent;
  let fixture: ComponentFixture<RegionesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionesUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
