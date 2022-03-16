import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmvpLibrosComponent } from './jmvp-libros.component';

describe('JmvpLibrosComponent', () => {
  let component: JmvpLibrosComponent;
  let fixture: ComponentFixture<JmvpLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmvpLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmvpLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
