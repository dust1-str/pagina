import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalleCreateFormComponent } from './calle-create-form.component';

describe('CalleCreateFormComponent', () => {
  let component: CalleCreateFormComponent;
  let fixture: ComponentFixture<CalleCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalleCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
