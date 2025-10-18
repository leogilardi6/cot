import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-rapida',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './info-rapida.html',
  styleUrl: './info-rapida.scss',
})
export class InfoRapida {}
