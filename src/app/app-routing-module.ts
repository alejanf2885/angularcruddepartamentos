import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { EditComponent } from './components/edit-component/edit-component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'crear', component: CreateComponent},
  {path: 'editar/:id', component: EditComponent},
  {path: 'detalles/:id/:nombre/:localidad', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
