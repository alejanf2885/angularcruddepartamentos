import { Departamento } from './../models/Departamento';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import axios from 'axios';

@Injectable()
export default class ServiceDepartamento {
  async getDepartamentos(): Promise<Array<Departamento>> {
    let request = 'api/Departamentos';
    let url = environment.urlDepartamentos + request;
    const response = await axios.get(url);
    return response.data;
  }

  async createDepartamento(departamento: Departamento): Promise<void> {
    let request = 'api/Departamentos';
    let url = environment.urlDepartamentos + request;
    const response = await axios.post(url, departamento);
    console.log('Departamento creado:', response.data);
  }

  async searchDepartamento(id: number): Promise<Departamento> {
    let request = `api/Departamentos/${id}`;
    let url = environment.urlDepartamentos + request;
    const response = await axios.get(url);
    return response.data;
  }

  async updateDepartamento(departamento: Departamento): Promise<void> {
    let request = 'api/Departamentos';
    let url = environment.urlDepartamentos + request;
    const response = await axios.put(url, departamento);
    console.log('Departamento actualizado:', response.data);
  }

  async deleteDepartamento(id: number): Promise<void> {
    let request = `api/Departamentos/${id}`;
    let url = environment.urlDepartamentos + request;
    await axios.delete(url);
      console.log('Departamento eliminado:', id);
  }
}