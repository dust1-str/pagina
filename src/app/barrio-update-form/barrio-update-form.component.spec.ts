import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioUpdateFormComponent } from './barrio-update-form.component';

describe('BarrioUpdateFormComponent', () => {
  let component: BarrioUpdateFormComponent;
  let fixture: ComponentFixture<BarrioUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarrioUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarrioUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
