import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-quienes-somos',
  imports: [MatExpansionModule],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss',
})
export class QuienesSomos {
  panelOpenState = signal(false);
}
