/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  DIAGNOSTICO_DATA,
  KINESIOLOGIA_DATA,
  MEDICOS_DATA,
  PERSONAL_DATA,
} from '../../../assets/data/personal.data';
import { RouterModule } from '@angular/router';
import { IMedico, IPersonal } from '../../../assets/interfaces/personal';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.html',
  styleUrl: './personal.scss',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
})
export class Personal {
  medicos = signal<IMedico[]>(MEDICOS_DATA.filter((medico) => medico.activo));
  personal = signal<IPersonal[]>(PERSONAL_DATA.filter((persona) => persona.activo));
  diagnosticos = signal<any[]>(DIAGNOSTICO_DATA.filter((persona) => persona.activo));
  kinesiologia = signal<any[]>(KINESIOLOGIA_DATA.filter((persona) => persona.activo));
}
