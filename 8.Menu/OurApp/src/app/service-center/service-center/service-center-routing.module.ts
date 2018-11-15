import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceCenterHomeComponent} from '../service-center-home/service-center-home.component';
import {ServiceCenterComponent} from './service-center.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'service-center',
    component: ServiceCenterComponent,
    children: [
          {
            path: '',
            component: ServiceCenterHomeComponent
          }
        ]
      }
    ];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
