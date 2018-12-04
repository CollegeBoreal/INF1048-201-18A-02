import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../auth/guards/admin.guard';
import {DashboardHomeComponent} from './dashboard-home/dashboard-home.component';
import {SuperDuperComponent} from './super-duper/super-duper.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'super-duper',
        component: SuperDuperComponent
      }
    ]
  }
];


@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // redirect and return false
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }

  canActivateChild (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return undefined;
  }
}
