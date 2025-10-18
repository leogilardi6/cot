import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgStyle } from '@angular/common';

export interface Medico {
  id: number;
  nombre: string;
  titulo: string;
  especialidad: string;
  descripcion?: string;
  imagen: string;
  activo: boolean;
  formacionAcademica?: Array<{
    titulo: string;
    institucion?: string;
    rol?: string;
    facultad?: string;
    matriculas?: {
      nacional?: string;
      provincial?: string;
    };
  }>;
  experiencia?: Array<{
    rol: string;
    supervisor?: string;
    institucion?: string;
    ubicacion?: string;
  }>;
  capacitaciones?: Array<{
    titulo: string;
    instructor?: string;
    institucion?: string;
    duracion?: string;
    ubicacion?: string;
    fecha?: string;
    tipo?: string;
    categoria?: string;
    modalidad?: string;
    anio?: number;
    evento?: string;
  }>;
  especialidades?: string[];
  redesSociales?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    web?: string;
  };
}

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos-aux.html',
  styleUrl: './medicos-aux.scss',
  standalone: true,
  imports: [MatCardModule, NgStyle],
})
export class Medicos {
  medicos = signal<Medico[]>([]);
  expanded = signal<Record<number, boolean>>({});

  constructor() {
    fetch('assets/data/medicos.json')
      .then((res) => res.json())
      .then((data) => {
        this.medicos.set(data.medicos.filter((m: Medico) => m.activo));
      });
  }

  isExpanded(id: number): boolean {
    return !!this.expanded()[id];
  }

  toggleExpand(id: number) {
    this.expanded.set({ ...this.expanded(), [id]: !this.isExpanded(id) });
  }
}
