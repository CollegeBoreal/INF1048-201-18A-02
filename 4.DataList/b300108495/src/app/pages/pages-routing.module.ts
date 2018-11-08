import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {PagesComponent} from './pages.component';
import {BonjourComponent} from './bonjour.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent, BonjourComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
