
import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutOneColumnComponent } from './layout/layout-one-column/layout-one-column.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES],
  declarations: [LayoutOneColumnComponent]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
    };
  }
}
