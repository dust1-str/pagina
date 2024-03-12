import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoUpdateFormComponent } from './distrito-update-form.component';

describe('DistritoUpdateFormComponent', () => {
  let component: DistritoUpdateFormComponent;
  let fixture: ComponentFixture<DistritoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistritoUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistritoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
