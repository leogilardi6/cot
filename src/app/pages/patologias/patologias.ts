/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATOLOGIAS_DATA } from '../../../assets/data/patologias.data';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-patologias',
  imports: [MatCardModule],
  templateUrl: './patologias.html',
  styleUrl: './patologias.scss',
})
export class Patologias {
  patologias = PATOLOGIAS_DATA;
  selectedPatologia: any = null;
  selectedSeccion: string | null = null;
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  navigate(patologia: string, seccion: string) {
    this.router.navigate([patologia, seccion], { relativeTo: this.route });
  }
}
