import { AuthService } from './auth.service';
import {  Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivate
           } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.auth.isAuthenticated() ){
      console.log("paso");
      return true;
    } else {
      console.error("no pasa");
      return false;
    }
  }

}
