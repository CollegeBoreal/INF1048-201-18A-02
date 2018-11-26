import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {AccueilComponent} from './dashbord/accueil/accueil.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashbordComponent,
  },
    {
      path: 'accueil',
      component: AccueilComponent,
    }],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
