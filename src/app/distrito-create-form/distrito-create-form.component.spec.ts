import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritoCreateFormComponent } from './distrito-create-form.component';

describe('DistritoCreateFormComponent', () => {
  let component: DistritoCreateFormComponent;
  let fixture: ComponentFixture<DistritoCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistritoCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistritoCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
