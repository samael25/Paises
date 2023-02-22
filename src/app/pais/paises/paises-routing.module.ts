import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from '../pages/por-capital/por-capital.component';
import { PorPaisComponent } from '../pages/por-pais/por-pais.component';
import { PorRegionComponent } from '../pages/por-region/por-region.component';
import { VerPaisComponent } from '../pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pais',
    pathMatch: 'full'
  },

  {
    path: 'region',
    component: PorRegionComponent
  },

  {
    path: 'capital',
    component: PorCapitalComponent
  },

  {
    path:'pais:id',
    component: VerPaisComponent
  },

  {
    path:'pais',
    component: PorPaisComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
