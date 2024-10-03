import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegistrateComponent } from './registrate/registrate.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'inisec',
    component: IniciarsesionComponent
  },
  {
    path: 'registro',
    component: RegistrateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
