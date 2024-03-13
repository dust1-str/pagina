import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalleUpdateFormComponent } from './calle-update-form.component';

describe('CalleUpdateFormComponent', () => {
  let component: CalleUpdateFormComponent;
  let fixture: ComponentFixture<CalleUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalleUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalleUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
