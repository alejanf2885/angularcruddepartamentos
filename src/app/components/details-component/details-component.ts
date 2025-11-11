import { Component } from '@angular/core';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {

   public departamento!: Departamento;

   constructor() {
    const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 3];
    const nombre = parts[parts.length - 2];
    const localidad = parts[parts.length - 1];
    this.departamento = {
      numero: Number(id),
      nombre: nombre,
      localidad: localidad
    };
  }

}