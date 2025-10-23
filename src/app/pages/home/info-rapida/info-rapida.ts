import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-rapida',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './info-rapida.html',
  styleUrl: './info-rapida.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InfoRapida {}
