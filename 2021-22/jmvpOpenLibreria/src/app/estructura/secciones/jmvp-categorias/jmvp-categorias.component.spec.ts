import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmvpCategoriasComponent } from './jmvp-categorias.component';

describe('JmvpCategoriasComponent', () => {
  let component: JmvpCategoriasComponent;
  let fixture: ComponentFixture<JmvpCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmvpCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmvpCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
