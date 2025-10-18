import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoSection } from './turno-section';

describe('TurnoSection', () => {
  let component: TurnoSection;
  let fixture: ComponentFixture<TurnoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnoSection],
    }).compileComponents();

    fixture = TestBed.createComponent(TurnoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
