import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MEDICOS_DATA, KINESIOLOGIA_DATA } from '../../../../assets/data/personal.data';
import { IMedico } from '../../../../assets/interfaces/personal';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatIcon, MatButton, RouterModule],
  templateUrl: './medico.html',
  styleUrls: ['./medico.scss'],
})
export class Medico {
  medico: IMedico | undefined;
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const nombreParam = params.get('nombre');
      const nombreBuscado = decodeURIComponent(nombreParam || '').toLowerCase();
      this.medico = MEDICOS_DATA.find((m) => m.nombre.toLowerCase() === nombreBuscado);
      if (!this.medico) {
        this.medico = KINESIOLOGIA_DATA.find((k) => k.nombre.toLowerCase() === nombreBuscado);
      }
    });
  }
}
