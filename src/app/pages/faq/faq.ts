import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { FAQ } from '../../../assets/data/faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Faq {
  faqList = FAQ;
}
