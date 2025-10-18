import { Component } from '@angular/core';
import { Carousel } from '../../shared/carousel/carousel';
import { Patologias } from './patologias/patologias';
import { InfoRapida } from './info-rapida/info-rapida';
import { InfoSection } from './info-section/info-section';
import { TurnoSection } from './turno-section/turno-section';

@Component({
  selector: 'app-home',
  imports: [Carousel, InfoSection, Patologias, InfoRapida, TurnoSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
