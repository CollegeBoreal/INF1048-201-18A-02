import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ThemeModule} from '../@theme/theme.module';
import {BonjourComponent} from './bonjour.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ],
  declarations: [PagesComponent, BonjourComponent]
})
export class PagesModule { }
