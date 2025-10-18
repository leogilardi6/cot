import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { BookAppointment } from './book-appointment/book-appointment';
import { Contactenos } from '../pages/home/contactenos/contactenos';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterModule, BookAppointment, Contactenos],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
