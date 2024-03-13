import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioUpdateFormComponent } from './edificio-update-form.component';

describe('EdificioUpdateFormComponent', () => {
  let component: EdificioUpdateFormComponent;
  let fixture: ComponentFixture<EdificioUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdificioUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdificioUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
