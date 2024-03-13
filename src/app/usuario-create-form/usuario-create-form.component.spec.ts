import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCreateFormComponent } from './usuario-create-form.component';

describe('UsuarioCreateFormComponent', () => {
  let component: UsuarioCreateFormComponent;
  let fixture: ComponentFixture<UsuarioCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
