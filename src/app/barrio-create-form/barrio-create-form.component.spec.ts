import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioCreateFormComponent } from './barrio-create-form.component';

describe('BarrioCreateFormComponent', () => {
  let component: BarrioCreateFormComponent;
  let fixture: ComponentFixture<BarrioCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrioCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarrioCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
