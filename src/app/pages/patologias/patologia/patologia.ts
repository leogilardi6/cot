import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATOLOGIAS_DATA } from '../../../../assets/data/patologias.data';
import { IPatologia, IPatologiaRel } from '../../../../assets/interfaces/patologias';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.html',
  styleUrl: './patologia.scss',
})
export class Patologia {
  selectedPatologia = signal<IPatologia | undefined>(undefined);
  patologias = PATOLOGIAS_DATA;
  selectedSeccion = signal<string>('');
  private route = inject(ActivatedRoute);

  // Computed para obtener la patología específica seleccionada
  selectedPatologiaRel = computed((): IPatologiaRel | undefined => {
    const patologia = this.selectedPatologia();
    const seccion = this.selectedSeccion();
    if (patologia && seccion) {
      return patologia.subsecciones.find((sub) => sub.id === seccion);
    }
    return undefined;
  });

  constructor() {
    this.route.params.subscribe((params: { [key: string]: string }) => {
      const id = params['id'];
      const seccion = params['seccion'];
      if (id) {
        this.selectedPatologia.set(this.patologias.find((p) => p.id == id) as IPatologia);
      } else {
        this.selectedPatologia.set(undefined);
      }
      this.selectedSeccion.set(seccion || '');
    });
  }
}
