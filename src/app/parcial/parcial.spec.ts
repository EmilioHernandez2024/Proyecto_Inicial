import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial } from './parcial';

describe('Parcial', () => {
  let component: Parcial;
  let fixture: ComponentFixture<Parcial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
