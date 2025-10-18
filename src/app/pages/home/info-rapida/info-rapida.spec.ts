import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRapida } from './info-rapida';

describe('InfoRapida', () => {
  let component: InfoRapida;
  let fixture: ComponentFixture<InfoRapida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRapida],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoRapida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
