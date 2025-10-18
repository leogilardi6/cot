import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TurnoSection } from '../home/turno-section/turno-section';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TurnoSection,
  ],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Contacto {
  contactoForm: FormGroup;
  private fb = inject(FormBuilder);

  constructor() {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  abrirWhatsApp() {
    if (this.contactoForm.valid) {
      const { nombre, email, telefono, mensaje } = this.contactoForm.value;
      const texto =
        'Consulta desde la web:%0A' +
        `Nombre: ${nombre}%0A` +
        `Correo: ${email}%0A` +
        `Teléfono: ${telefono}%0A` +
        `Mensaje: ${mensaje}`;
      window.open(`https://wa.me/5492914079520?text=${texto}`, '_blank');
    }
  }

  sacarTurno() {
    window.open('https://paciente.sigemed.com.ar/portal/Cot', '_blank');
  }
}
