import { Component, Input, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento';
import ServiceDepartamento from '../../services/service.departamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent implements OnInit {
  
  public id!: string;

  public departamentoForm: Departamento = {
    numero: null!,
    nombre: '',
    localidad: '',
  };

  constructor(private _serviceDepartamento: ServiceDepartamento, private route: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') || '';


    this._serviceDepartamento.searchDepartamento(Number(this.id)).then((response) => {
      this.departamentoForm = response;
    });
  }

  public updateDepartamento(): void {
    this._serviceDepartamento.updateDepartamento(this.departamentoForm).then(() => {
      this.router.navigate(['/departamentos']);
    });

  }
}