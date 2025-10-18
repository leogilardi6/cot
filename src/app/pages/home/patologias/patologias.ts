import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-patologias',
  imports: [MatCardModule],
  templateUrl: './patologias.html',
  styleUrl: './patologias.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Patologias {
  patologias = [
    {
      title: 'Cadera',
      image: 'assets/images/patologias/cadera_white.png',
    },
    {
      title: 'Columna Vertebral',
      image: 'assets/images/patologias/columna_white.png',
    },
    {
      title: 'Hombro y Miembro superior',
      image: 'assets/images/patologias/hombro-logo.svg',
    },
    {
      title: 'Mano y Muñeca',
      image: 'assets/images/patologias/muneca-logo.svg',
    },
    {
      title: 'PRP - Células Madre',
      image: 'assets/images/patologias/prp_celulas_white.png',
    },
    {
      title: 'Rodilla',
      image: 'assets/images/patologias/rodilla_white.png',
    },
    {
      title: 'Tobillo y Pie',
      image: 'assets/images/patologias/tobillo_pie_white.png',
    },
  ];

  showPatologias = signal(false);

  onSectionInView() {
    this.showPatologias.set(true);
  }
}
