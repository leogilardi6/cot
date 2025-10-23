import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.html',
  styleUrl: './contactenos.scss',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
})
export class Contactenos {
  contactInfo = {
    direccion: {
      titulo: 'Dirección',
      texto: 'Terrada 1534, Bahía Blanca',
    },
    telefono: {
      titulo: 'Teléfonos',
      texto: '2914079520',
      nota: 'Ir a Whatsapp (Solo Texto)',
    },
    horarios: {
      titulo: 'Horarios de atención',
      texto: ['Lunes a Viernes', 'de 9 a 19hs'],
    },
    web: {
      titulo: 'Web',
      texto: 'www.cotbahia.com.ar',
      url: 'http://www.cotbahia.com.ar',
    },
  };
}
