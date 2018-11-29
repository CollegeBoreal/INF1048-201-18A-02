import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from '../@theme/theme.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GallerieComponent } from './gallerie/gallerie.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [PagesComponent, DashboardComponent, GallerieComponent]
})
export class PagesModule { }
