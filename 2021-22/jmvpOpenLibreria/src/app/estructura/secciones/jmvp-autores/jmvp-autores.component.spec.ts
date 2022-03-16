import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmvpAutoresComponent } from './jmvp-autores.component';

describe('JmvpAutoresComponent', () => {
  let component: JmvpAutoresComponent;
  let fixture: ComponentFixture<JmvpAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmvpAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmvpAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
