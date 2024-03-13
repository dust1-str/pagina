import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquilinoUpdateFormComponent } from './inquilino-update-form.component';

describe('InquilinoUpdateFormComponent', () => {
  let component: InquilinoUpdateFormComponent;
  let fixture: ComponentFixture<InquilinoUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquilinoUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InquilinoUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
