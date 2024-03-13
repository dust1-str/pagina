import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioCreateFormComponent } from './edificio-create-form.component';

describe('EdificioCreateFormComponent', () => {
  let component: EdificioCreateFormComponent;
  let fixture: ComponentFixture<EdificioCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdificioCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdificioCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
