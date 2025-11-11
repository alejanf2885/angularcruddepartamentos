import { Component } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import ServiceDepartamento from '../../services/service.departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent {
  constructor(private _serviceDepartamento: ServiceDepartamento, private _router: Router) {}

  public departamento: Departamento = {
    numero: null!,
    nombre: '',
    localidad: '',
  };

  crearDepartamento(): void {
    this._serviceDepartamento.createDepartamento(this.departamento).then(() => {
      this._router.navigate(['/departamentos']);
    });
  }
}
