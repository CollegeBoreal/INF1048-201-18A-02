import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ],
  declarations: [ComposeMessageComponent]
})
export class MyModuleModule { }
