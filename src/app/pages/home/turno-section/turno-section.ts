import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-turno-section',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './turno-section.html',
  styleUrl: './turno-section.scss',
})
export class TurnoSection {
  sacarTurno() {
    window.open('https://paciente.sigemed.com.ar/portal/Cot', '_blank');
  }
}
