import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
// import { HeroListComponent }  from './hero-list/hero-list.component';  // <-- delete this line


const appRoutes: Routes = [
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
