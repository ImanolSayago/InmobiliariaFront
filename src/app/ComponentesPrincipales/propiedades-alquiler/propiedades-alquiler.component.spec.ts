import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesAlquilerComponent } from './propiedades-alquiler.component';

describe('PropiedadesAlquilerComponent', () => {
  let component: PropiedadesAlquilerComponent;
  let fixture: ComponentFixture<PropiedadesAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadesAlquilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiedadesAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
