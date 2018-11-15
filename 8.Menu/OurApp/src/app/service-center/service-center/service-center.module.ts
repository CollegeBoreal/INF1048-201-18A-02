import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceCenterComponent } from './service-center.component';
import {ServiceCenterRoutingModule} from './service-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   ServiceCenterRoutingModule
  ],
  declarations: [
    ServiceCenterComponent,
  ]
})
export class CrisisCenterModule {}
