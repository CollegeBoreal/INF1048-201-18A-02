import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from '../@theme/theme.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import {AccueilComponent} from './dashbord/accueil/accueil.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [PagesComponent, DashbordComponent, AccueilComponent]
})
export class PagesModule { }
