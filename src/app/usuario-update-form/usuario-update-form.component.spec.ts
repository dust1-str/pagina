import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioUpdateFormComponent } from './usuario-update-form.component';

describe('UsuarioUpdateFormComponent', () => {
  let component: UsuarioUpdateFormComponent;
  let fixture: ComponentFixture<UsuarioUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
