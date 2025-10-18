import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [MatCardModule, NgStyle],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  servicios = [
    {
      image: '/assets/images/servicios/serv_1.png',
      backgroundcolor: '#0097dc',
      description: 'Tecnología avanzada para estudios radiológicos precisos y rápidos.',
    },
    {
      image: '/assets/images/servicios/serv_2.jpg',
      backgroundcolor: '#ffffff',
      description: 'Análisis biomecánico de la marcha y confección de plantillas personalizadas.',
    },
    {
      image: '/assets/images/servicios/serv_3.png',
      backgroundcolor: '#ffffff',
      description: 'Rehabilitación física y funcional para una recuperación integral.',
    },
    {
      image: '/assets/images/servicios/serv_4.png',
      backgroundcolor: '#ffffff',
      description: 'Asistencia para la recuperación de la autonomía en actividades diarias.',
    },
  ];
}
