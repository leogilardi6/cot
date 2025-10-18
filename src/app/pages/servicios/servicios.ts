import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { KINESIOLOGIA_DATA } from '../../../../src/assets/data/personal.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.scss'],
})
export class Servicios {
  public KINESIOLOGIA_DATA = KINESIOLOGIA_DATA;
}
