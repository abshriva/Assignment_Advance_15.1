import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Injectable()
export class AuthGuardComponent implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('can activate invoked')
    if (sessionStorage.getItem('access_token')) {
      return true;
    };
    this._router.navigate(['/login']);
    return false;
    
  }
}
