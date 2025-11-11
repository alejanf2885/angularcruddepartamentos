import { Component, OnInit } from '@angular/core';
import ServiceDepartamento from '../../services/service.departamento';
import { Departamento } from '../../models/Departamento';

@Component({
  selector: 'app-departamentos',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit {

  public departamentos! : Array<Departamento>;

  constructor(private _service: ServiceDepartamento) {}


  ngOnInit(): void {
    this._service.getDepartamentos().then(response => {
      this.departamentos = response;
      console.log(this.departamentos);
    })
  }


  
}
