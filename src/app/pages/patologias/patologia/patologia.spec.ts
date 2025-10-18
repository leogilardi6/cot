import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patologia } from './patologia';

describe('Patologia', () => {
  let component: Patologia;
  let fixture: ComponentFixture<Patologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patologia],
    }).compileComponents();

    fixture = TestBed.createComponent(Patologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
