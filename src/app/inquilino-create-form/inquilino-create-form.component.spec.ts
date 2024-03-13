import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoCreateFormComponent } from './inquilino-create-form.component';

describe('InquilinoCreateFormComponent', () => {
  let component: InquilinoCreateFormComponent;
  let fixture: ComponentFixture<InquilinoCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquilinoCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquilinoCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
